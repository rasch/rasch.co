import { css, html } from "@rasch/reno"
import { icon } from "./icon.js"
import { g } from "./g.js"

/**
 * @param {string} text
 */
const _ = text => text
  .toLowerCase()
  .replace(/[^a-z]/g, "_")
  .replace(/__+/g, "_")
  .replace(/_$/, "")

/**
 * @param {string} text
 */
const title = text => html`<p class="h2">${text}</p>`

/**
 * @param {string} id
 * @param {string} text
 */
const textField = (id, text) => html`
<p>
  <label for="${id}">${text}</label>
  <input type="text" id="${id}" name="${id}" maxlength="255" required />
</p>`

/**
 * @param {string} id
 * @param {string} text
 */
const numberField = (id, text) => html`
<p>
  <label for="${id}">${text}</label>
  <input type="tel" id="${id}" name="${id}" maxlength="20" required />
</p>`

/**
 * @param {string} id
 * @param {string} [text]
 */
const emailField = (id, text = "Email") => html`
<p>
  <label for="${id}_email">${text}</label>
  <input type="email" id="${id}_email" name="${id}_email" maxlength="255" required />
</p>`

/**
 * @param {string} id
 * @param {string} [text]
 */
const messageField = (id, text = "Message") => html`
<p>
  <label for="${id}_message">${text}</label>
  <textarea id="${id}_message" name="${id}_message" required></textarea>
</p>`

/**
 * @param {string} id
 * @param {string} [text]
 */
const passwordField = (id, text = "Password") => html`
<p class="password">
  <label for="${id}_password">${text}</label>
  <input
    type="password"
    id="${id}_password"
    name="${id}_password"
    minlength="8"
    maxlength="255"
    required
  />
  <input type="checkbox" id="${id}_password_toggle" name="${id}_password_toggle" />
  <label for="${id}_password_toggle">Show ${text}</label>
  <button type="button" title="Show ${text}">
    ${icon("eye")}${icon("eye-off")}
  </button>
  ${id === "login" ? `<a href="#">Forgot Password?</a>` : ""}
</p>`

/**
 * @param {string} id
 */
const passwordToggle = id => html`
<script type="module">
const loginForm = document.getElementById("${id}_form")
const password = document.getElementById("${id}_password")
const toggle = document.getElementById("${id}_password_toggle")
const toggleLabel = document.querySelector("#${id}_password_toggle ~ label")
const toggleButton = document.querySelector("#${id}_password_toggle ~ button")

toggleButton.addEventListener("click", _ => {
  toggle.click()
})

toggle.addEventListener("change", _ => {
  const shown = toggle.checked

  password.setAttribute("type", shown ? "text" : "password")
  toggleLabel.innerHTML = shown ? "Hide Password" : "Show Password"
  toggleButton.setAttribute("title", shown ? "Hide Password" : "Show Password")
})

// set type to password before submit to prevent autocomplete saving passwords
loginForm.addEventListener("submit", _ => {
  passwordToggle.checked = false
  password.setAttribute("type", "password")
})
</script>`

/**
 * @param {string} id
 */
const validateCard = id => html`
<script type="module">
const luhn = card => {
  let n = card
  let digit
  let total = 0
  while (n) {
    digit = n % 10
    n = Math.floor(n / 10)
    total += digit
    digit = n % 10 * 2
    n = Math.floor(n / 10)
    if (digit > 9) {
      total += 1
      total += digit % 10
    } else {
      total += digit
    }
  }
  return total % 10 === 0
}
const card = document.getElementById("${id}_card_number")
card.addEventListener("input", e => {
  card.setCustomValidity("")
  if (!card.validity.valid) {
    return
  }
  if (!luhn(card.value)) {
    card.setCustomValidity("Please enter a valid card number")
  }
})
</script>`

/**
 * @param {string} text
 */
const submitButton = text => html`
<p class="button">
  <button type="submit">${text}</button>
</p>`

/**
 * @param {{ url: string, text: string}[]} links
 */
const footerLinks = (...links) => html`
<footer>
  <p>${links.map(link => `<a href="${link.url}">${link.text}</a>`).join("")}</p>
</footer>`

/**
 * @param {string} id
 * @param {string} text
 * @param {boolean} [required]
 */
const checkboxField = (id, text, required = false) => html`
<p class="checkbox">
  <input type="checkbox" id="${id}" name="${id}"${required ? " required" : ""} />
  <label for="${id}">${text}</label>
</p>`

/**
 * @param {string} id
 */
const statesField = id => html`
<div>
  <label for="${id}_state">State</label>
  <div class="select-wrapper">
    <select id="${id}_state" name="${id}_state" required>
      <optgroup label="States">
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA" selected>California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </optgroup>
      <hr>
      <optgroup label="Territories">
        <option value="AS">American Samoa</option>
        <option value="GU">Guam</option>
        <option value="MP">Northern Mariana Islands</option>
        <option value="PR">Puerto Rico</option>
        <option value="VI">U.S. Virgin Islands</option>
      </optgroup>
      <hr>
      <optgroup label="Federal Districts">
        <option value="DC">District of Columbia</option>
      </optgroup>
    </select>
  </div>
</div>`

/**
 * @param {string} id
 * @param {string} [text]
 */
const cardExpirationField = (id, text = "Expiration") => html`
<p>
  <label for="${id}_card_expiration">${text}</label>
  <input
    type="tel"
    id="${id}_card_expiration"
    name="${id}_card_expiration"
    placeholder="MM/YY"
    pattern="^\\s*(0[1-9]|1[0-2])\/([0-9]{2})\\s*$"
    required
  />
</p>`

/**
 * @param {string} id
 * @param {string} [text]
 */
const cardSecurityField = (id, text = "Expiration") => html`
<p>
  <label for="${id}_card_security">${text}</label>
  <input
    type="tel"
    id="${id}_card_security"
    name="${id}_card_security"
    pattern="^\\s*\\d{3,4}\\s*$"
    required
  />
</p>`

/**
 * @param {string} id
 * @param {string} [text]
 */
const zipCodeField = (id, text = "Zip Code") => html`
<p>
  <label for="${id}_zip">${text}</label>
  <input
    type="tel"
    id="${id}_zip"
    name="${id}_zip"
    pattern="^\\s*\\d{5}\\s*"
    required
  />
</p>`

/**
 * @param {"login"} id
 */
export const loginForm = (id = "login") => html`
<form id="${id}_form" action="" method="post">
  ${title("Welcome back!")}
  ${emailField(id)}
  ${passwordField(id)}
  ${checkboxField(`${id}_cookie`, "Remember Me")}
  ${submitButton("Sign In")}
  ${footerLinks({ url: "#", text: "Not registered? Create an account." })}
  ${passwordToggle(id)}
</form>`

/**
 * @param {"register"} id
 */
export const registrationForm = (id = "register") => html`
<form id="${id}_form" action="" method="post">
  ${title("Create Account")}
  ${textField(`${id}_name`, "Name")}
  ${emailField(id)}
  ${passwordField(id)}
  ${checkboxField(
    id + "_accept_tos",
    `By creating an account you agree to the
    <a href="#">Terms of Service</a> and
    <a href="#">Privacy Policy</a>.`,
    true
  )}
  ${submitButton("Sign Up")}
  ${footerLinks({ url: "#", text: "Already have an account?" })}
  ${passwordToggle(id)}
</form>`

/**
 * @param {"subscribe"} id
 */
export const subscriptionForm = (id = "subscribe") => html`
<form id="${id}_form" action="" method="post">
  ${title("Subscribe to our mailing list!")}
  ${emailField(id)}
  ${submitButton(id)}
  ${footerLinks(
    { url: "#", text: "Unsubscribe" },
    { url: "#", text: "Privacy Policy" }
  )}
</form>`

/**
 * @param {"contact"} id
 */
export const contactForm = (id = "contact") => html`
<form id="${id}_form" action="" method="post">
  ${title("Send us a message!")}
  ${textField(`${id}_name`, "Name")}
  ${emailField(id)}
  ${messageField(id)}
  ${submitButton("Send")}
  ${footerLinks(
    { url: "#", text: "Terms of Service" },
    { url: "#", text: "Privacy Policy" }
  )}
</form>`

export const postForm = (id = "post") => html`
<form id="${id}_form" action="" method="post">
  ${messageField(id, "What's happening?")}
  ${submitButton("Post")}
</form>`

/**
 * @param {"payment"} id
 */
export const paymentForm = (id = "payment") => html`
<form id="${id}_form" action="" method="post">
  ${title("Payment Details")}
  ${textField(`${id}_cardholder_name`, "Cardholder Name")}
  ${numberField(`${id}_card_number`, "Card Number")}
  <div class="half">
    ${cardExpirationField(id)}
    ${cardSecurityField(id, "CSC")}
  </div>
  ${checkboxField(id + "_save_card", "Save card for future purchases")}
  ${submitButton("Pay Now")}
  ${footerLinks(
    { url: "#", text: "Terms of Service" },
    { url: "#", text: "Privacy Policy" }
  )}
  ${validateCard(id)}
</form>`

/**
 * @param {"Billing" | "Shipping"} type
 * @param {"address"} [id]
 */
export const addressForm = (type, id = "address") => html`
<form id="${_(type)}_${id}_form" action="" method="post">
  ${title(`${type} Address`)}
  <div class="half">
    ${textField(`${_(type)}_${id}_first_name`, "First Name")}
    ${textField(`${_(type)}_${id}_last_name`, "Last Name")}
  </div>
  ${textField(`${_(type)}_${id}_street`, "Address")}
  ${textField(`${_(type)}_${id}_city`, "City")}
  <div class="half">
    ${statesField(`${_(type)}_${id}`)}
    ${zipCodeField(`${_(type)}_${id}`)}
  </div>
  ${type === "Billing"
    ? checkboxField(
      `${id}_use_billing`,
      "Shipping address is same as billing address"
    )
    : ""
  }
  ${submitButton("Next")}
  ${footerLinks(
    { url: "#", text: "Terms of Service" },
    { url: "#", text: "Privacy Policy" }
  )}
</form>`

/**
 * @param {string} text
 * @param {"radio" | "checkbox"} type
 * @param {string} group
 * @param {string[]} options
 */
const optionList = (text, type, group, options) => html`
<fieldset>
  <legend>${text}</legend>
  <ul>
    ${options.map(o => `<li>
    <input type="${type}" id="${group}_${_(o)}" name="${group}" value="${_(o)}" />
    <label for="${group}_${_(o)}">${o}</label>
    </li>`).join("")}
  </ul>
</fieldset>`

/**
 * @param {string} text
 * @param {"radio" | "checkbox"} type
 * @param {string} group
 * @param {string[]} options
 * @param {string} [results_url]
 */
export const surveyForm = (text, type, group, options, results_url) => html`
<form action="" method="post">
  ${optionList(text, type, group, options)}
  ${submitButton("Submit")}
  ${results_url
    ? footerLinks({ url: results_url, text: "View Results" })
    : ""
  }
</form>`

export const formCSS = () => css`
form {
  display: grid;
  grid-row-gap: ${g}rem;
  padding: ${g}rem;
  background-color: var(--dark-black-opaque);
  border-radius: ${g / 4}rem;
}

#toggle-dark-mode:checked ~ .theme-wrapper form {
  background-color: var(--bright-white);
}

form label {
  width: 100%;
}

form input,
form textarea {
  appearance: none;
  width: 100%;
  height: ${g}rem;
  padding: 0 ${g / 8}rem;
  border: none;
  outline: none;
  background-color: var(--texture);
  color: inherit;
  border-radius: ${g / 8}rem;
  box-shadow: inset 1px 1px 3px var(--dark-black-opaque);
}

#toggle-dark-mode:checked ~ .theme-wrapper form input,
#toggle-dark-mode:checked ~ .theme-wrapper form textarea {
  background-color: var(--bg);
}

form textarea {
  height: ${g * 4}rem;
  vertical-align: top; /* fix vertical rhythm */
  resize: vertical;
}

form input:focus,
form textarea:focus {
  outline: 1px solid var(--blue);
}

#toggle-dark-mode:checked ~ .theme-wrapper form input:user-invalid,
#toggle-dark-mode:checked ~ .theme-wrapper form textarea:user-invalid,
form input:user-invalid,
form textarea:user-invalid {
  background-color: var(--red);
  color: var(--black)
}

form input:disabled,
form textarea:disabled,
form input:disabled ~ label {
  cursor: not-allowed;
  opacity: 0.42;
}

form input[type="checkbox"],
form input[type="radio"] {
  position: relative;
  bottom: -0.15rem;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  vertical-align: middle;
}

form input[type="radio"] {
  border-radius: 50%;
}

form input[type="checkbox"]::before,
form input[type="radio"]::before {
  content: "";
  position: absolute;
  top: -0.4rem;
  left: 0.35rem;
  display: inline-block;
  width: 0.6rem;
  height: 1.2rem;
  border-right: 4px solid currentColor;
  border-bottom: 4px solid currentColor;
  transform: rotate(45deg);
  font-size: 1rem;
  visibility: hidden;
}

form input[type="checkbox"]:checked::before,
form input[type="radio"]:checked::before {
  visibility: visible;
}

form input[type="checkbox"] ~ label,
form input[type="radio"] ~ label {
  width: auto;
  padding-left: ${g / 2}rem;
}

form select {
  appearance: none;
  display: block;
  width: 100%;
  padding: 0 ${g}rem 0 ${g / 8}rem;
  border: none;
  flex-shrink: 0;
  background: var(--texture);
  color: inherit;
  text-overflow: ellipsis;
  border-radius: ${g / 8}rem;
  box-shadow: inset 1px 1px 3px var(--dark-black-opaque);
}

#toggle-dark-mode:checked ~ .theme-wrapper form select {
  background: var(--bg);
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  position: absolute;
  top: ${g / 16}rem;
  right: ${g / 4}rem;
  font-size: 0.85rem;
  opacity: 0.75;
}

form footer {
  text-align: center;
  box-shadow: 0 -1px 0 0 var(--texture);
}

form footer a:not(:last-of-type) {
  margin-right: ${g}rem;
}

form div.half {
  display: flex;
  gap: ${g}rem;
}

form div.half > div,
form div.half > p {
  width: 50%;
}

form p.password {
  position: relative;
}

form p.password input {
  padding-right: ${g * 2}rem;
}

form input[id$="password_toggle"] ~ button {
  display: flex;
  align-items: center;
  position: absolute;
  top: ${g}rem;
  right: 0;
  width: auto;
  height: ${g}rem;
  padding: 0 ${g / 2}rem;
  margin: 0;
  opacity: 0.75;
  box-shadow: unset;
}

form input[id$="password_toggle"] ~ button:hover:enabled {
  box-shadow: unset;
}

.no-js form input[id$="password_toggle"] ~ button,
form input[id$="password_toggle"],
form input[id$="password_toggle"] ~ label,
form input[id$="password_toggle"] ~ button .eye-off-icon,
form input[id$="password_toggle"]:checked ~ button .eye-icon {
  display: none;
}

form input[id$="password_toggle"]:checked ~ button .eye-off-icon {
  display: flex;
}

form p.button {
  text-align: right;
}

form p.button button {
  text-transform: capitalize;
}

form fieldset {
  padding: ${g / 2}rem;
  border: none;
}

form fieldset ul {
  list-style: none;
}

form fieldset ul li,
form p.checkbox {
  display: flex;
  align-items: baseline;
}

form p input ~ a {
  float: right;
}

form p input ~ a,
form footer p a {
  box-shadow: unset !important;
}

form p input ~ a:hover,
form footer p a:hover {
  text-decoration: underline;
}`
