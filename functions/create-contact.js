require('dotenv').config()
require("encoding")
const fetch = require("node-fetch").default
// save these to environmental variables
const api_key = process.env.api_key 
const token = process.env.token
const list_id = process.env.list_id
const headers = {
  'Authorization': 'Bearer ' + token,
  'Content-Type': 'application/json'
}
// phone number, email, name
// example in data prop
const example = {
  "addresses": [
    {
      "address_type": "",
      "city": "",
      "country_code": "",
      "line1": "",
      "line2": "",
      "postal_code": "",
      "state_code": ""
    }
  ],
  "lists": [
    {
      "id": list_id
    }
  ],
  "cell_phone": "",
  "company_name": "",
  "confirmed": false,
  "email_addresses": [
    {
      "email_address": ""
    }
  ],
  "fax": "",
  "first_name": "",
  "home_phone": "",
  "job_title": "",
  "last_name": "",
  "prefix_name": "",
  "work_phone": ""
}

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  console.log(body)
  try {
    const response = await checkForContact(body.email)

    if (response.exists) {
      return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Contact Exists', id: response.id })
      }
    } else {
      // create contact
      const newContact = await createContact(body)
      return {
        statusCode: 201,
        body: JSON.stringify({ msg: 'Contact Created', id: newContact.id })
      }
    }
  } catch(e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: e.message })
    }
  }

}

/**
 * Checks to see if email already exists as a contact.
 * @param {*} email 
 */
async function checkForContact(email) {
  const url = 'https://api.constantcontact.com/v2/contacts?api_key=' + api_key + '&email=' + email
  try {

    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    })

    const data = await response.json()
    console.log(data)

    if (data.results.length > 0) {
      console.log('Contact Exists: ' + data.results[0].id)
      return { exists: true, id: data.results[0].id }
    } else {
      console.log('Contact Does Not Exist')
      return { exists: false }
    }

  } catch(e) {
    console.error(e.message)
    throw(new Error({error: e.message}))
  }
}

/**
 * Creates the contact in Constant Contact for the given list.
 * @param {*} contact 
 */
async function createContact(contact) {
  const url = 'https://api.constantcontact.com/v2/contacts?action_by=ACTION_BY_OWNER&api_key=' + api_key
  const data = {
    lists: [
      {
        id: list_id
      }
    ],
    cell_phone: contact.phone ? contact.phone : '',
    confirmed: false,
    email_addresses: [
      {
        email_address: contact.email
      }
    ],
    first_name: contact.fName ? contact.fName : '',
    last_name: contact.lName ? contact.lName : '',
  }

  try {

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })

    const json = await response.json()
    console.log(json)
    return { id: json.id }

  } catch(e) {
    console.error(e.message)
    throw (new Error(e.message))
  }
}