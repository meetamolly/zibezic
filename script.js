import { useForm } from '@formspree/react';
function SignupForm() {
  const [state, handleSubmit] = useForm('signupForm');
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <button disabled={state.submitting}>Sign up</button>
    </form>
  )
}

{
  "forms": {
    "signupForm": {
      "name": "Sign-up Form",
      "actions": [{ "type": "email", "to": "your@email.com" }],
      "fields": {"email": {"required": "true", "type": "email"}}
    }
  }
}
<form action="https://formspree.io/f/{form_id}" method="post">
  <label for="email">Your Email</label>
  <input name="Email" id="email" type="email">
  <button type="submit">Submit</button>
</for
