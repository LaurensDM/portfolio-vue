<template>
  <v-layout id="contact">
    <v-footer class="bg-black text-center text-white flex flex-col p-5">
      <div class="container mb-10">
        <form
          id="contact"
          name="contact"
          netlify
          netlify-honeypot="bot-field"
          method="post"
          class="mx-auto flex flex-col max-w-lg px-16 py-10 gap-3 rounded-xl bg-darkShade"
        >
          <input type="hidden" name="form-name" value="contact"/>
          <h4>Contact me!</h4>
          <fieldset>
            <input
              name="name"
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              class="w-full form-input rounded text-black"
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your E-mail"
              name="email"
              type="email"
              tabindex="3"
              required
              class="w-full form-input rounded text-black"
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here...."
              name="message"
              tabindex="4"
              required
              class="w-full form-textarea rounded text-black"
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              class="bg-regular px-3 py-2 rounded"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>

      <div>2023 — <strong>Laurens De Maeyer</strong></div>
    </v-footer>
  </v-layout>
</template>
