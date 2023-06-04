<template>
  <v-layout id="contact">
  <v-footer
    class="bg-black text-center text-white flex flex-col p-5"
  >
  <div class="container mb-10">  
  <form id="contact" @submit="submitForm" class="mx-auto flex flex-col max-w-lg px-20 py-10 gap-3 rounded-xl bg-darkShade">
    <h4>Contact me!</h4>
    <fieldset>
      <input name="subject" placeholder="Your name" type="text" tabindex="1" v-model="name" required autofocus class="w-full form-input rounded text-black">
    </fieldset>
    <fieldset>
      <input placeholder="Your E-mail" name="email" type="email" v-model="email" tabindex="3" required class="w-full form-input rounded text-black">
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." name="body" v-model="message" tabindex="4" required class="w-full form-textarea rounded text-black"></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" class="bg-regular px-3 py-2 rounded">Submit</button>
    </fieldset>
  </form>
</div>

    <div>
      {{ new Date().getFullYear() }} — <strong>Laurens De Maeyer</strong>
    </div>
  </v-footer>
</v-layout>
</template>

<script >
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      // Perform any data validation or additional logic here
      this.sendEmail();
    },
    sendEmail() {
      const { name, email, message } = this;
      console.log(name, email, message);
      const msg = {
        to: import.meta.env.VITE_SENDGRID_EMAIL,
        from: import.meta.env.VITE_SENDGRID_EMAIL,
        subject: 'New message from ' + name,
        text: 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>