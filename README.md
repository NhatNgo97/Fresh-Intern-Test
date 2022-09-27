Sick of HackerRank or LeetCode? Don't worry, this homework task is designed to be closer to our daily life as a Fresher. We believe that your coding skills, problem solving, business logic, and communication skills are all equally important.

This test is designed to be finished in 2 hours. If you have any questions/difficulties please contact us. 

Let's get started and hope you enjoy!

## Prerequisites

To complete this test, you need to have:

- [Node.js](https://nodejs.org) (v16.17.0 recommended)
- [Figma](https://www.figma.com)

## Getting Started

First, install dependencies and prisma client:

```bash
yarn install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task 1

Build a basic log-in page with the design provided by Fresh.

[Design](https://www.figma.com/file/x8bsnfDnTVRqW8mvSPZKYx/Fresh-Engineering-Intern?node-id=1%3A12)

## Task 2

Make sure the page is responsive. A mobile design will be provided for your reference.

https://www.figma.com/file/x8bsnfDnTVRqW8mvSPZKYx/Fresh-Engineering-Intern?node-id=1%3A99

## Task 3

Okay, time to make the login works. Don't worry, we won't ask you to build the whole authentication system. What you need to do is to validate the form data with corresponding error message.

```bash
POST /api/login
```

This endpoint needs to send back the correct response message to the client side.

Form data:

```json
{
  "email": "test@fresh.xyz",
  "password": "test"
}
```

Expected behavior: `PASS`

Other test cases should return the correct error message.

Sounds a bit hard, don't be scared! Building RESTful api in Next.js is very easy. You can read [this page](https://nextjs.org/docs/api-routes/introduction) to get started.

If you run out of time, writing some comments to explain your ideas are always valuable.

## Submission
Please follow the following steps to submit your work:

1. Save your work
2. Run `rm -rf .next node_modules` to delete `.next` and `node_modules`
3. Compress everything into a `.zip` file
4. Upload the `.zip` file to https://internship.freshamplify.com

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [TailwindCSS Documentation](https://tailwindcss.com) - learn about TailwindCSS.

If you have any question, do not hesitate to contact us.

Good luck!
