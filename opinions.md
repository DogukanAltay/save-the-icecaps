# My Thoughts and Opinion About The Save The Icecaps Inc.

## Technical
- After reading the assignment, I found out I am the Frontend Developer of the Save The Icecaps Inc. Therefore I have evaluated the assignment as such.
- As a developer, to achieve a good implementation of what organization needed I had need such documents:
    * Software Requirements Document, to actually understand which functional and non-functional requirements do I have to achieve with the software.
    * UI Mockup Document, to have an understanding of what the webpage should look like and how its elements should function.
- Due to lacking documentation for development, there is a huge possibility for not meeting the criterias of the stakeholders who designed the webpage.
- In general, document was lacking technical specifications and it was open for a lot of errors both in terms of UX and technical standpoint.

## Ethical
- After reading the assignment, It was really easy to understand the company's ethical position in terms of personal data and consents.
- They represents themselves as GDPR-complient organization. However, I am pretty sure, no such organization can publish a subscription form with Terms and Conditions checkbox already checked.
- There should be a checkbox for asking consent from the user for us to use additional data for marketing purposes. It is a common practice on most forms already so I have took initiative and added a consent checkbox for it. I would've reported my decision to the proper people in the company so it will be documented as well.
- In the assignment there was a phase mentioned as "guilt-tripping text". In my opinion, there should not be any such texts in a donation subscription form because people who are filling out these forms are already doing a good deed. Therefore, I have changed those texts more like "motivational-texts" so users feel good with themselves and maybe it would have encouraged them to opt-out for a monthly recurring subscription.
- There was a mentioned additional income text field as additional data. In my opinion, asking this kind of sensitive information about the user would probably discourage user to donate for the icecaps. Therefore, I have discarded income field and would have reported like I said before.



# My Thoughts About Development Stage

- Since I am lacking Frontend development experience, I have decided to learn Vue.js + Typescript for the assignment.
- I have used Vue-CLI for starting the application from scratch. Therefore, there are generic test files for jest and eslint. I have looked in to unit testing with jest and vue-test-utils but it was a bit complicated to set it up and I didn't have much time to wrote proper tests for the software.
- To make the design easier and more coherent I have used Bootstrap Vue and for form validation checking I have used VeeValidate (first one come up in google search. I could've gone for Vuelidate as well.)
- Overall, assignment was easy. Since I was learning a whole new tech stack it was actually fun and entertaining for me. I have even waste some time to make a modal for subscription submitting just because of my curiosity.
- There are some issues with the software itself;
    * Both monthly or one-time subscription checkboxes can be selected together. Which is not good for UX. I couldn't fixed it in limited time but it shouldn't be too hard.
    * Donation text box has a minimum value check so users cant enter values less than zero. However, ValidationProvider accepts the empty input as valid. I didn't have time to fix it.
    * I didn't put any address validation in case of a bad address. I thought I could've used a Google Maps API to actually check whether the address is valid or not but I didn't put my time on it.
    * On the browser console, there is a recurring error about "Type check failed." but it is not preventing code from working so I left it as is.
    
# Conclusion

The task itself wasn't too challenging for a fresh Frontend Developer Candidate like me. On the otherside, It was pretty fun and enjoyable to actually do something in a whole different tech stack. Personally, I do really like the general idea of Vue.js with components. It makes the software modular, extendable and easy to maintain with the Typescript.

However, I can't say the same positive things about the Saving The Icecaps Inc. Both from ethical and technical standpoint, In my opinion they are just an incompetent, unethical and ruthless organization to work with. I would personally never work for such organization. 

Ps. You can't even save icecaps with sending printed media to masses. It is just ironic.