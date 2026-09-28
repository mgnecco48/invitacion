# Date invitation website

## Project goal

Build a small, personal website that Martín can link to in an email to surprise his wife with a date invitation. The page should feel warm, thoughtful, and playful. It should work especially well on a phone. Martín wants to understand and edit the code himself after the first version.

## Working with Martín

- Treat this as a collaborative project. Explain the structure and important changes in plain language.
- Make a first working version with clearly marked placeholder text; ask Martín for the real date details and personal message before filling them in. Do not invent names, reservations, times, addresses, or intimate details.
- Keep content easy to change, ideally in one obvious section near the top of a file or in a small `content.js` file.
- Favor small, readable edits. Let Martín choose among meaningful visual or narrative directions when a choice matters.
- Do not send the email, purchase a domain, configure DNS, or publish the site without Martín's explicit instruction.

## Technical direction

- Use plain HTML, CSS, and a little vanilla JavaScript. Avoid React, build tooling, external services, and dependencies unless Martín asks for them.
- Make the site suitable for a GitHub Pages project repository, including relative asset paths so it works at `https://<username>.github.io/<repository>/`.
- Keep the implementation accessible: semantic HTML, keyboard-operable reveal controls, visible focus states, sufficient contrast, reduced-motion support, and responsive layout.
- The reveal should be delightful but simple: an opening invitation, a button or card that reveals the plan, and a personal message. A graceful no-JavaScript fallback is welcome.
- No analytics, tracking, forms, account creation, or backend are needed.
- Assume the published page and repository can be discovered publicly. Do not put sensitive details, secrets, or private photos into the repo without Martín's informed choice.

## Suggested files

- `index.html` — page structure and clearly identified editable invitation copy.
- `style.css` — layout, typography, colors, mobile behavior, and restrained animation.
- `script.js` — reveal interaction only, if needed.
- `README.md` — how to preview locally, edit the invitation, and publish with GitHub Pages.

Keep the file structure smaller if that makes the first version easier to understand.

## First implementation

1. Inspect the existing repository and follow its conventions if files already exist.
2. Create a polished, mobile-first draft with placeholders such as `[DATE]`, `[TIME]`, `[PLACE OR CLUE]`, `[WHAT TO WEAR]`, and `[PERSONAL MESSAGE]`.
3. Preview it locally and check both phone and desktop widths, keyboard interaction, and the reveal flow.
4. Explain exactly where Martín can edit the text, colors, and reveal behavior.
5. Provide GitHub Pages instructions in the README, but leave publication and domain setup to a later explicit request.

## Content decisions to ask Martín

- What is the date, time, meeting place, and activity?
- Should the page reveal the destination or keep a clue until the date?
- What tone should it have: romantic, playful, mysterious, or a mix?
- Is there a personal message, shared memory, photo, or song he wants to include?
- Which language should the invitation use?

The site can be developed with placeholders while these answers are pending.
