# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    Within a Github action that runs whenever code is pushed. We want to use Github actions to allow us to automate tasks when 
    something happens in our Recipe project repo. They are like event listeners for our repository and we want to trigger
    specific processes/actions/run tests whenever we push code.
2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    Yes
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, because the message feature has different smaller moving components such as write and send which should be separate unit tests.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, we should use a unit test to check this individual feature and testing this feature should not affect other non-related unit tests such as sending or writing message features.

