import { html, md } from "@rasch/reno"

import { admonition } from "../components/admonition.js"
import { keyboard } from "../components/keyboard.js"
import { inlineList } from "../components/inline-list.js"

/**
 * Placeholder Text (generated by Cat Ipsum)
 * @param {number} n
 */
const placeText = n => [
  "Cat ipsum dolor sit amet, mouser so sphynx. Ocelot tomcat and scottish fold american bobtail or lion, yet manx or ragdoll. Russian blue lion. Mmmmmmmmeeeeoooowwwww. Kitten balinese . Turkish angora turkish angora sphynx so manx. Devonshire rex lion. Cornish rex. Ragdoll ocicat munchkin. Donskoy siberian. Kitten cornish rex but tabby. Cornish rex birman so ocelot yet ocicat for jaguar savannah yet turkish angora. Russian blue american shorthair, turkish angora and balinese . Siamese panther siamese. Burmese. Norwegian forest ragdoll. Lion maine coon so maine coon so burmese.",
  "Thai kitten. Jaguar bombay. British shorthair himalayan lion. Munchkin leopard siamese. Tomcat russian blue. Bobcat. Birman tom siberian cornish rex bombay american bobtail. Thai. Egyptian mau. Savannah ocicat, but kitty. Malkin jaguar but persian ragdoll kitten for persian. Siberian tomcat and bobcat panther siberian bobcat singapura. Ocelot manx, but tabby british shorthair. Grimalkin cheetah panther yet tabby siamese puma. Savannah turkish angora thai ragdoll, kitten and jaguar but bombay. Balinese himalayan ocicat american bobtail. Himalayan. Maine coon russian blue so norwegian forest. Ocicat grimalkin but cheetah sphynx for bengal. Kitty kitten but balinese , for ragdoll puma ocicat american bobtail.",
  "Devonshire rex himalayan for thai cornish rex bobcat so egyptian mau. Singapura cougar. Bengal tomcat scottish fold tomcat panther but kitten and turkish angora. Havana brown. American shorthair persian puma cornish rex ocicat. Donskoy ocelot for siamese or sphynx, for mouser. Cornish rex singapura or persian siamese, jaguar, mouser cornish rex. Devonshire rex devonshire rex but tiger puma. Singapura maine coon donskoy for ocelot so american bobtail for mouser. Tiger. Devonshire rex balinese but singapura tom. Grimalkin sphynx. Maine coon grimalkin and panther so singapura. Bobcat malkin maine coon yet ragdoll or panther, british shorthair yet munchkin. Balinese norwegian forest or bobcat siamese and cougar or donskoy. Savannah malkin yet kitty, for birman ragdoll. Puma cheetah siberian and abyssinian but siamese tiger for ragdoll. Bombay singapura or egyptian mau for sphynx panther, siamese british shorthair. Russian blue siamese lynx and malkin american shorthair or bengal egyptian mau. Himalayan cougar. Siberian persian tom panther. Cougar turkish angora turkish angora mouser puma. Manx savannah malkin and kitten ocelot. British shorthair. Scottish fold munchkin grimalkin and sphynx.",
  "Savannah malkin tom american bobtail, sphynx. Norwegian forest bombay tabby himalayan american shorthair bobcat so egyptian mau. Tiger thai so grimalkin. Kitty. Cheetah. Sphynx egyptian mau yet ocicat yet mouser or munchkin puma and bombay. Leopard siberian tom kitty balinese cougar abyssinian . Leopard ocelot american shorthair but himalayan, yet scottish fold, but american bobtail. American bobtail tiger, russian blue, bombay ragdoll yet persian so turkish angora. British shorthair tiger panther so maine coon balinese kitty. Cougar american shorthair. Siberian tomcat but sphynx, leopard siamese for leopard.",
  "Kitten savannah. Siberian leopard and devonshire rex but bobcat so panther leopard. Sphynx balinese but norwegian forest balinese . Bengal munchkin so maine coon so puma. Grimalkin singapura. Ocicat. Bombay. Panther grimalkin russian blue yet lion and abyssinian but tabby. Grimalkin. Malkin ragdoll, and american bobtail and american bobtail malkin.",
][n]

/**
 * Placeholder Images
 * @param {number} x
 * @param {number} [y]
 */
const placeImage = (x, y) => `https://placecats.com/g/${x}/${y ?? x}`

/**
 * @param {string} lang
 */
const tripleTickMafia = lang => html`<code>&#96;&#96;&#96;${lang}</code>`

/**
 * @type {import("@rasch/reno").Post}
 */
export const post = {
  title: "Markdown Ipsum: A Styleguide",
  tags: ["markdown", "styleguide"],
  date: "2024-12-01T00:00:00",
  comments: true,
}

post.content = md`
Hello, world! Welcome to my first post. This is **not** a *traditional* first
post or really even a post at all. It is more of a *styleguide* for the
typography components of my website. It's a showcase of all the elements working
together in perfect vertical rhythm. It's a convenient overview of the
components that I've created for writing articles on my blog and ~~a helpful
tool~~ for designing new components as needed.

${admonition({
  title: "Hot Tip",
  style: "tip",
  body: md`Press the <kbd>#</kbd> key to toggle the **vertical rhythm grid**
  rows. What is the \`#\` symbol called? It has gone by
  [several names](https://en.wikipedia.org/wiki/Number_sign#Names),
  but I personally prefer hash.`
})}

## Table of Contents

- [Headings](#headings)
- [Inline Elements](#inline-elements)
  - [Kbd](#kbd)
  - [Kitchen Sink](#kitchen-sink)
- [Lists](#lists)
  - [Unordered Lists](#unordered-lists)
  - [Ordered Lists](#ordered-lists)
  - [Mixed Lists](#mixed-lists)
  - [Task Lists](#task-lists)
  - [Description Lists](#description-lists)
  - [Inline Lists](#inline-lists)
- [Horizontal Rule](#horizontal-rule)
- [Blockquotes](#blockquotes)
- [Code Blocks](#code-blocks)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
  - [Shell](#shell)
  - [C](#c)
  - [CSS](#css)
- [Images](#images)
- [Figures](#figures)
- [Videos](#videos)
- [Tables](#tables)
  - [Center Aligned Table](#center-aligned-table)
  - [Left Aligned Table](#left-aligned-table)
  - [Right Aligned Table](#right-aligned-table)
  - [Mixed Aligned Table](#mixed-aligned-table)
- [Buttons](#buttons)
- [Badges](#badges)
- [Comments](#comments)
- [Admonitions](#admonitions)
- [Footnotes](#footnotes)
- [Forms](#forms)
- [Code Playground](#code-playground)

The rest of this document is mostly placeholder text from [Cat Ipsum], and
images from [placecats], plus some random quotes. The actual content is the
style of the elements and the usage examples.

[Cat Ipsum]: http://www.catipsum.com/index.php
[placecats]: https://placecats.com/

## Headings

The elements \`h1\`, \`h2\`, \`h3\`, \`h4\`, \`h5\`, and \`h6\` should only be
used for semantically outlining a document. The corresponding classes can be
used for styling non-heading elements.

The following Markdown...

\`\`\`markdown
# Heading h1
## Heading h2
### Heading h3
#### Heading h4
##### Heading h5
###### Heading h6
\`\`\`

will produce...

# Heading h1
## Heading h2
### Heading h3
#### Heading h4
##### Heading h5
###### Heading h6

and the following HTML...

\`\`\`html
<p class="h1">h1 class</p>
<p class="h2">h2 class</p>
<p class="h3">h3 class</p>
<p class="h4">h4 class</p>
<p class="h5">h5 class</p>
<p class="h6">h6 class</p>
\`\`\`

produces...

<p class="h1">h1 class</p>
<p class="h2">h2 class</p>
<p class="h3">h3 class</p>
<p class="h4">h4 class</p>
<p class="h5">h5 class</p>
<p class="h6">h6 class</p>

# Title h1

${placeText(0)}

## Section h2

${placeText(1)}

### Subsection h3

${placeText(2)}

#### Subsection h4

${placeText(3)}

##### Subsection h5

${placeText(4)}

### Long (multi-line) Bois

# H1: ${placeText(1)?.split(" ").slice(0, 7).join(" ")}

${placeText(4)}

## H2: ${placeText(1)?.split(" ").slice(0, 7).join(" ")}

${placeText(4)}

### H3: ${placeText(1)?.split(" ").slice(0, 10).join(" ")}

${placeText(4)}

#### H4: ${placeText(1)?.split(" ").slice(0, 13).join(" ")}

${placeText(4)}

##### H5: ${placeText(1)?.split(" ").slice(0, 16).join(" ")}

${placeText(4)}

## Inline Elements

The following table displays all of the inline elements that are currently
in use. More will be added as needed.

| output                                                      | markup                                                          |
|:------------------------------------------------------------|:----------------------------------------------------------------|
| *italic*                                                    | \`*italic*\`                                                    |
| em*pha*sis                                                  | \`em*pha*sis\`                                                  |
| **bold**                                                    | \`**bold**\`                                                    |
| ***bold italic***                                           | \`***bold italic***\`                                           |
| ~~strike~~                                                  | \`~~strike~~\`                                                  |
| \`code\`                                                    | \\\`\`code\`\\\`                                                |
| [link](#)                                                   | \`[link](#)\`                                                   |
| x<sup>3</sup>                                               | \`x<sup>3</sup>\`                                               |
| H<sub>2</sub>O                                              | \`H<sub>2</sub>O\`                                              |
| ![alt](${placeImage(128)} "title")                          | \`![alt](${placeImage(128)} "title")\`                          |
| <abbr title="Hypertext Markup Language">HTML</abbr>         | \`<abbr title="Hypertext Markup Language">HTML</abbr>\`         |
| Line One<br>Line Two                                        | \`Line One<br>Line Two\`                                        |
| <mark>highlight</mark>                                      | \`<mark>highlight</mark>\`                                      |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd>           | \`<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd>\`           |
| <ins>underlined</ins>                                       | \`<ins>underlined</ins>\`                                       |
| Dr. Seuss said, <q>You have to be odd to be number one.</q> | \`Dr. Seuss said, <q>You have to be odd to be number one.</q>\` |

### Kbd

${keyboard()}

### Kitchen Sink

Dixit lumina auctor H<sub>2</sub>O sacrorum ***vulnere quam adunca***: fluctibus
nec quod, ~~sub paventes~~, nec ad latebat manus celebrare. O deviaque, gelidos
0U812 caede quem liquores, condiderat nam est capistris **promere**. Cupit
concita animas sine, et hanc Dromas *fibris* exemplis traderet, haec 0123456789
erit tepidae tellus. Sed secutum sperat Aiacis; est ullis \`gregibus quamvis\`
sparserat [leves](#): sequi humi.

Fines aequora humana x<sup>y</sup> quoniam plumas, fit excipit, **contigit**
tenuique direptos *Iove*! Fruatur alite conplexusque undis, dextra subnectite
eadem, [sparsuras](#). Mollirique
<kbd>simul</kbd> turres, inveniebantur [sopire](#) in
undas, nec.

Morte **vestrum ad verbis** Dixit *ipse conferat prolisque* sacrilega du*bit*are
satis, **iterumque**. Tremescere bella: <mark>superare</mark> repetebam retraxi;
colla prendere *Lyrnesia* velatae in in ad moram dumque! Mollia tuae reliquerat
<abbr title="A Contrived Reduction Of Nouns, Yielding Mnemonics">ACRONYM</abbr>
lepores rerum quoque, radix ora punior, subito aliquid, caelum cum antris furta,
ecquem? Pro [adspicio Sirenum Euboicas](#) Phoebus pars.
<ins>Quod obstrepuere</ins>, condor, <q>huius ventis erat facta</q> Latina
audax.

## Lists

### Unordered Lists

- Cum dentes putant
- Regia tibi meos par Pallas Amphionis rumpunt
- Flammas facit
  - Roganti Iris longa cadet continet iactas liceat
  - Subitus avulsa
    - Regia tibi meos par Pallas Amphionis rumpunt
- Finiat visa
- ${placeText(3)?.split(" ").slice(0, 21).join(" ")}

\`\`\`markdown
- Cum dentes putant
- Regia tibi meos par Pallas Amphionis rumpunt
- Flammas facit
  - Roganti Iris longa cadet continet iactas liceat
  - Subitus avulsa
    - Regia tibi meos par Pallas Amphionis rumpunt
- Finiat visa
- ${placeText(3)?.split(" ").slice(0, 21).join(" ")}
\`\`\`

### Ordered Lists

1. Sagitta medio venae dat Cereris nihil tenuit
1. Opusque pthiam tunc subitus
    1. Vanam nata venerat idque fallebat volatilis et
    1. Imagine inquit nostra perfectaque aetas digitis Cinyran
1. Mutando in medium audita scisset rem ambobus
1. Clamavit Doridaque aethere
1. ${placeText(3)?.split(" ").slice(0, 21).join(" ")}

\`\`\`markdown
1. Sagitta medio venae dat Cereris nihil tenuit
1. Opusque pthiam tunc subitus
    1. Vanam nata venerat idque fallebat volatilis et
    1. Imagine inquit nostra perfectaque aetas digitis Cinyran
1. Mutando in medium audita scisset rem ambobus
1. Clamavit Doridaque aethere
1. ${placeText(3)?.split(" ").slice(0, 21).join(" ")}
\`\`\`

### Mixed Lists

1. Sagitta medio venae dat Cereris nihil tenuit
1. Opusque pthiam tunc subitus
    - Vanam nata venerat idque fallebat volatilis et
    - Imagine inquit nostra perfectaque aetas digitis Cinyran
1. Mutando in medium audita scisset rem ambobus
    - Clamavit Doridaque aethere

\`\`\`markdown
1. Sagitta medio venae dat Cereris nihil tenuit
1. Opusque pthiam tunc subitus
    - Vanam nata venerat idque fallebat volatilis et
    - Imagine inquit nostra perfectaque aetas digitis Cinyran
1. Mutando in medium audita scisset rem ambobus
    - Clamavit Doridaque aethere
\`\`\`

### Task Lists

- [x] Task A
- [ ] Task B
- [ ] Task C
  - [x] Task C.1
    - [ ] Task C.1.a
    - [x] Task C.1.b
  - [ ] Task C.2
- [x] Task D

\`\`\`markdown
- [x] Task A
- [ ] Task B
- [ ] Task C
  - [x] Task C.1
    - [ ] Task C.1.a
    - [x] Task C.1.b
  - [ ] Task C.2
- [x] Task D
\`\`\`

### Description Lists

<dl>
  <dt>Term 1</dt>
  <dd>${placeText(4)}</dd>
  <dt>This is a Longer Term title</dt>
  <dd>The definition of term two.</dd>
</dl>

\`\`\`html
<dl>
  <dt>Term 1</dt>
  <dd>${placeText(4)}</dd>
  <dt>This is a Longer Term title</dt>
  <dd>The definition of term two.</dd>
</dl>
\`\`\`

### Inline Lists

Guest stars on "The New Scooby-Doo Movies" include:
${inlineList("The Addams Family", "Don Knotts", "Sonny & Cher", "Laurel and Hardy", "The Harlem Globetrotters", "and many more!")}

\`\`\`javascript
import { inlineList } from "../components/inline-list.js"
\`\`\`

    Guest stars on "The New Scooby-Doo Movies" include:
    \${inlineList("The Addams Family", "Don Knotts", "Sonny & Cher", "Laurel and Hardy", "The Harlem Globetrotters", "and many more!")}

## Horizontal Rule

${placeText(2)}

---

${placeText(3)}

\`\`\`markdown
---
\`\`\`

## Blockquotes

${placeText(2)}

> My fake plants died because I did not pretend to water them.
> <footer>Mitch Hedberg</footer>

${placeText(2)}

> You have to be odd to be number one.
> <footer>Dr. Seuss</footer>

${placeText(4)}

\`\`\`markdown
> My fake plants died because I did not pretend to water them.
> <footer>Mitch Hedberg</footer>

> You have to be odd to be number one.
> <footer>Dr. Seuss</footer>
\`\`\`

${placeText(2)}

> Moratum ne patitur tutos dum vulgi grande vidit se mortale dulcis gaudet
> [combinators](https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45)
> caelumque deferri praemia optetis, terga! In possit *divorum meum terrae*, it
> robore curru, per. Amplexus sinuantur, et exiguus, corpora amico sit siccis
> mugitu ille, dicunt reperire adpropera totos luctisono pennisque. Sit unca
> amores **nec**.
>
> ${placeText(2)}
> <footer>Hello World</footer>

${placeText(2)}

    > Moratum ne patitur tutos dum vulgi grande vidit se mortale dulcis gaudet
    > [combinators](https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45?permalink_comment_id=3536424)
    > caelumque deferri praemia optetis, terga! In possit *divorum meum terrae*, it
    > robore curru, per. Amplexus sinuantur, et exiguus, corpora amico sit siccis
    > mugitu ille, dicunt reperire adpropera totos luctisono pennisque. Sit unca
    > amores **nec**.
    >
    > ${placeText(2)}
    > <footer>Hello World</footer>

${placeText(3)}

> I have a confession. I can't beat "Contra (1988)" without first pressing
> <kbd>Up</kbd> <kbd>Up</kbd> <kbd>Down</kbd> <kbd>Down</kbd>
> <kbd>Left</kbd> <kbd>Right</kbd> <kbd>Left</kbd> <kbd>Right</kbd>
> <kbd>B</kbd> <kbd>A</kbd> <kbd>Start</kbd>.
> <footer>Rand Schneck</footer>

${placeText(4)}

## Code Blocks

Synax highlighting is provided on this site for the [common langauges supported
by Highlight.js][highlight.js]. I'll add support for additional languages as
needed (zig, purescript, haskell, elm, and more). All of the code blocks in this
section are detected automatically without specifying the language. Most of the
HTML and Markdown blocks above required the language to be specified using
fenced code blocks, for example: ${tripleTickMafia("markdown")} or
${tripleTickMafia("html")}

[highlight.js]: https://highlightjs.org/download

### JavaScript

    // factorial :: Integer -> BigInt
    export const factorial = n =>
      BigInt(n) === 0n ? 1n : BigInt(n) * factorial(BigInt(n) - 1n)

Calculate PI to 100,000 places!

    // pi :: Integer -> BigInt
    const pi = d => {
      let x = 3n * 10n ** BigInt(d + 20)
      let p = x

      for (let i = 1n; x > 0n; i += 2n) {
        x = x * i / ((i + 1n) * 4n)
        p += x / (i + 2n)
      }

      return p / 10n ** 20n
    }

    console.log(pi(100_000))

### TypeScript

    interface Constant {
      <T>(a: T): (_?: any) => T
    }

    export const constant: Constant = a => _ => a

### Shell

    #!/bin/sh

    y1="\${1:-$(date +%Y)}"
    y2="\${2:-$y1}"

    for i in $(seq "$y1" "$y2"); do
      for j in $(seq 1 12); do
        if test "$(date -d "$i-$j-13" +%a)" = 'Fri'; then
          printf '%04d-%02d-13\\n' "$i" "$j"
        fi
      done
    done

### C

    #include <string.h>

    void string_reverse(char str[]) {
      int n = strlen(str);

      for (int i = 0; i < n / 2; i++) {
        char tmp = str[i];

        str[i] = str[n - i - 1];
        str[n - i - 1] = tmp;
      }
    }

### CSS

    .font-scale {
      font-size: 100%;
    }

    @media (min-width: 512px) {
      .font-scale {
        font-size: 115%;
      }
    }

    @media (min-width: 768px) {
      .font-scale {
        font-size: 125%;
      }
    }

## Images

${placeText(1)}

![Kitty Cat](${placeImage(720)})

\`\`\`markdown
![Kitty Cat](${placeImage(720)})
\`\`\`

${placeText(2)}

![Kitty Cat](${placeImage(320, 480)})

${placeText(3)}

![Kitty Cat](${placeImage(675, 450)})

${placeText(4)}

![Kitty Cat](${placeImage(256)})

## Figures

<figure>
  <img src="${placeImage(720, 540)}" alt="A pretty kitty">
  <figcaption>${placeText(4)}</figcaption>
</figure>

<figure>
  <img src="${placeImage(420, 420)}" alt="Another pretty kitty">
  <figcaption>Hello, world!</figcaption>
</figure>

\`\`\`html
<figure>
  <img src="${placeImage(720, 540)}" alt="A pretty kitty">
  <figcaption>Hello, world!</figcaption>
</figure>
\`\`\`

## Videos

The only video type that is currently supported is an \`<iframe>\` with a
YouTube embed. I'm not hosting my own content in a \`<video>\` element until I'm
getting paid... **Bandwidth ain't free!**

<iframe
  src="https://www.youtube.com/embed/SLIZpWrK8xo?si=cPS76-2JSHY9NBf8"
  title="Pete &amp; Bas - T-Pain (Music Video)"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

\`\`\`html
<iframe
  src="https://www.youtube.com/embed/SLIZpWrK8xo?si=cPS76-2JSHY9NBf8"
  title="Pete &amp; Bas - T-Pain (Music Video)"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
\`\`\`

## Tables

### Center Aligned Table

${placeText(4)}

| id | name    | rel size | mass (kg)              |
|----|---------|----------|------------------------|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |

${placeText(4)}

\`\`\`markdown
| id | name    | rel size | mass (kg)              |
|----|---------|----------|------------------------|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |
\`\`\`

### Left Aligned Table

${placeText(4)}

| id | name    | rel size | mass (kg)              |
|:---|:--------|:---------|:-----------------------|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |

${placeText(4)}

\`\`\`markdown
| id | name    | rel size | mass (kg)              |
|:---|:--------|:---------|:-----------------------|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |
\`\`\`

### Right Aligned Table

${placeText(4)}

| id | name    | rel size | mass (kg)              |
|---:|--------:|---------:|-----------------------:|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |

${placeText(4)}

\`\`\`markdown
| id | name    | rel size | mass (kg)              |
|---:|--------:|---------:|-----------------------:|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |
\`\`\`

### Mixed Aligned Table

${placeText(4)}

| id | name    | rel size | mass (kg)              |
|---:|--------:|:---------|:-----------------------|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |

${placeText(4)}

\`\`\`markdown
| id | name    | rel size | mass (kg)              |
|---:|--------:|:---------|:-----------------------|
| 1  | Mercury | 0.38     | 3.3022x10<sup>23</sup> |
| 2  | Venus   | 0.95     | 4.8685x10<sup>24</sup> |
| 3  | Earth   | 1.00     | 5.9736x10<sup>24</sup> |
| 4  | Mars    | 0.53     | 6.4185x10<sup>23</sup> |
\`\`\`

${placeText(2)}

## Buttons

Here are the button options.

<button>Click Me</button>
<button class="green">Click Me</button>
<button class="blue">Click Me</button>

<button class="red">Click Me</button>
<button class="yellow">Click Me</button>
<button class="green" disabled>Disabled</button>

    <button>Click Me</button>
    <button class="green">Click Me</button>
    <button class="blue">Click Me</button>

    <button class="red">Click Me</button>
    <button class="yellow">Click Me</button>
    <button class="green" disabled>Disabled</button>

${placeText(4)}

<button>Submit</button>
<button class="red">Cancel</button>

## Badges

<span class="badge">badge</span>
<span class="badge green">green</span>
<span class="badge blue">blue</span>
<span class="badge red">red</span>
<span class="badge yellow">yellow</span>

    <span class="badge">badge</span>
    <span class="badge green">green</span>
    <span class="badge blue">blue</span>
    <span class="badge red">red</span>
    <span class="badge yellow">yellow</span>

### Piscator enim <span class="badge red">awesome</span><span class="badge green">badges</span>

Serpentum Arcadiae. [Longo cernit](http://www.vestros-si.org/hostemceler)
errent. Talis coniurataeque regia **distantia** madefactam inque desierat
aquarum deum qua, \`sed\` super patientem rubentia ut.

- Sagitta medio venae dat Cereris nihil tenuit <span class="badge">best seller</span>
- Opusque pthiam tunc subitus <span class="badge green">new</span>
- Vanam nata venerat idque fallebat volatilis et <span class="badge blue">sale</span><span class="badge yellow">low inventory</span>
- Imagine inquit nostra perfectaque aetas digitis Cinyran
- Mutando in medium audita scisset rem ambobus <span class="badge red">sold out</span>
- Clamavit Doridaque aethere

## Comments

[This comment is not included in the output.]: #
<!-- This comment is included in the output. -->

    [This comment is not included in the output.]: #
    <!-- This comment is included in the output. -->

## Admonitions

${admonition({
  title: "Note",
  body: md`Some **helpful** advice`,
  style: "note",
})}

${admonition({
  title: "Abstract",
  body: md`Some **helpful** advice`,
  style: "abstract"
})}

${admonition({
  title: "Example",
  body: md`Some **helpful** advice`,
  style: "example"
})}

${admonition({
  title: "Info",
  body: md`Some **helpful** advice`,
  style: "info"
})}

${admonition({
  title: "Tip",
  body: md`Some **helpful** advice`,
  style: "tip"
})}

${admonition({
  title: "Question",
  body: md`Some **helpful** advice`,
  style: "question"
})}

${admonition({
  title: "Success",
  body: md`Some **helpful** advice`,
  style: "success",
})}

${admonition({
  title: "Warning",
  body: md`Some **helpful** *advice*`,
  style: "warning",
})}

${admonition({
  title: "Bug",
  body: md`Some **helpful** advice`,
  style: "bug",
})}

${admonition({
  title: "Failure",
  body: md`An *error* occurred! Go to [this link](#) for a solution.`,
  style: "failure",
})}

${admonition({
  title: "Danger",
  body: md`Some **helpful** advice`,
  style: "danger",
})}

## Footnotes

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit. Donec porttitor,
ipsum vitae dignissim cursus, risus enim molestie lorem, non molestie felis
velit eget mi. In eu ex ut enim scelerisque accumsan id vitae augue. Sed
iaculis, turpis et auctor lacinia, lectus justo vulputate ipsum, sit amet
scelerisque nibh tellus et augue. Ut urna dui, tristique[^2] sit amet malesuada
eget, aliquet at risus. Cras id nisl vitae enim fringilla varius mollis et
risus. Etiam facilisis varius sem ac dapibus[^3]. Suspendisse potenti. Praesent
rhoncus leo vel rhoncus sodales.

[^1]: Donec posuere nunc non turpis ultrices dignissim tempor a orci.
[^2]: Fusce tincidunt diam molestie sapien rutrum, vel porta risus tristique.
[^3]: Nullam nec vehicula felis. Nunc ultrices enim ac tristique posuere. Etiam
    ac mi aliquet, pellentesque tortor volutpat, aliquam enim. Donec sit amet
    diam vel eros elementum malesuada vel vitae ipsum. Nulla scelerisque tellus
    in augue vehicula, et pretium magna laoreet. Aenean a nulla at tortor
    vestibulum bibendum quis non nisi. Sed lobortis nulla ac ligula viverra
    molestie.

    Aenean dictum elit in augue placerat egestas. Morbi euismod justo a arcu
    tincidunt molestie. Fusce egestas commodo leo ac sollicitudin. Morbi turpis
    mi, fringilla cursus nisl sed, maximus ultricies mi. Quisque semper nisl in
    leo lobortis posuere. Etiam sagittis eleifend pharetra. Aliquam venenatis
    augue non risus sodales, vel aliquet nibh elementum. Phasellus finibus nulla
    vitae quam consequat, faucibus dignissim sem consequat. Aliquam auctor dui
    sed nisi iaculis, eu dapibus lectus sagittis.

\`\`\`markdown
Lorem ipsum[^1] dolor sit…

[^1]: Donec posuere nunc non turpis…
\`\`\`

## Forms

TODO

## Code Playground

TODO

`
