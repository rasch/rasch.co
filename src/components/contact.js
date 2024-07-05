import { css, html, md } from "@rasch/reno"
import { icon } from "./icon.js"

const email = md`i@rasch.co`
const pgpkey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEYjqNEBYJKwYBBAHaRw8BAQdA6MVcn/R/W7QOsbNLMTcGUbZkeRWn76sz2XND
xjJHOVW0GlJhbmR5IFNjaG5lY2sgPGlAcmFzY2guY28+iJYEExYKAD4CGwEFCwkI
BwMFFQoJCAsFFgIDAQACHgECF4AWIQTAH9xHZ083UflinbkNv37jZDE7zQUCZZ30
QQUJBTrngAAKCRANv37jZDE7zRubAP40mlQZrrC7VhHRm3PDV57xVDkhOqLwuq2/
JSXyyrnULgD/UIrSJ/ufCCXv9npT2g8+Cr7nWckv0Z0qwbKNcHwgqgi4OARiOo3O
EgorBgEEAZdVAQUBAQdAfvDeYXe2VQHBQEMQyP3L/U5odcY8p3EtLPqauM2kQmED
AQgHiHgEGBYKACAWIQTAH9xHZ083UflinbkNv37jZDE7zQUCYjqNzgIbDAAKCRAN
v37jZDE7zY36APsGzjy4jhuB2SlDjFdURkxtnb4vbrDr6c6P/s/6st7ADgD/X12g
TLU96DihaGr3Al50kCtYFKLXUSO/2uKumBbclgi4MwRiOo38FgkrBgEEAdpHDwEB
B0B+jpwWQ9ZOpXUEz5ZaE7q+IpVQVEK1ONEBxbmRJ5LW6oh4BBgWCgAgFiEEwB/c
R2dPN1H5Yp25Db9+42QxO80FAmI6jfwCGyAACgkQDb9+42QxO83RRwEAzfKWSkcq
LdlIk57gfbQYqLo3+QZA7NON+aAsc20qn0EBALfIiROkOK0Wrd7uUh+JaT+eIH1j
O7dUPskx2iYUiisMuDMEYjqOIBYJKwYBBAHaRw8BAQdAENkFEacaJYeaxO1ddAcx
CZMbJMxe6jqGwsvl7jeJig2I7wQYFgoAIBYhBMAf3EdnTzdR+WKduQ2/fuNkMTvN
BQJiOo4gAhsCAIEJEA2/fuNkMTvNdiAEGRYKAB0WIQRQzrK6xc5ZfatFJvXY/+rE
btNWUQUCYjqOIAAKCRDY/+rEbtNWUerHAQCpA2rLMJpAdYgKz/3OcIfM19n5DwWj
513OwcV/IYyDeQD/TO7oGFqrwyQm6i2m9XHKoM2DtZ7QFR1TaSoNEICi/wiN6wEA
vxWACsQ6kEoIy7cy6bt/+i/8l7seplNg5/zlVWJa2JkBAIjB6H8M9Qr5ZIy2pHiT
O+qbyzoNt0+qWFFwEtSP4f8I
=Jnki
-----END PGP PUBLIC KEY BLOCK-----`

export const contact = () => html`
<div class="contact texture">
  <div>
    <h3>Send electronic mail to me!</h3>
    <p><em>...if you want to</em></p>
    <div class="email" style="--icon-size:1.75rem">
      ${icon("send")} ${email}
    </div>
  </div>
  <pre class="pubkey">${pgpkey}</pre>
</div>`

export const contactCSS = () => css`
.contact {
  position: relative; /* required for clipboard notification */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 6rem 0;
  text-align: center;
}

.contact .email {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.contact a[href^="mailto:"] {
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--fg);
}

.contact .pubkey {
  max-width: calc(100% - 3rem);
  overflow-x: scroll;
  font-family: var(--mono);
  font-size: 0.8rem;
  text-align: left;
  opacity: 0.7;
}

@media (min-width: 888px) {
  .contact {
    flex-direction: row;
  }

  .contact a[href^="mailto:"] {
    font-size: 2rem;
  }
}`
