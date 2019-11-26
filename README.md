<!-- This app is your first step towards becoming the next judge on The Great British Baking Show. Your app should be able to:

List the names of your cakes in a CakeList -->
<!-- When clicking on the 'Show' button below a cake, it should display more info about the cake in the CakeDisplay area
More info includes the cake category and its image -->
<!-- Selecting the dropdown filter should allow you to filter the CakeList by category -->
BONUS: Changing the cake category on the CakeDisplay should persist the change to the backend
BONUS: Clicking the Hide button should delete the cake from the list (this does not need to persist)

STEP 1: VIEW THE DATA
All of the cake data is stored in the db.json file. You'll want to access this data using a json server. In order to do this, run the following command:

npm install -g json-server
json-server --watch db.json
npm start

This will setup the data on a server using restful routes at http://localhost:3001/cakes.

Go to that url in your browser to view the data.

STEP 2: ADD CAKES TO CAKELIST
On page load, make a fetch to get all of the cake data. When you have this information, render the cake names to the CakeList.

STEP 3: DISPLAY INFO ABOUT EACH CAKE ON CLICK
When a user clicks on the 'Show' button below a cake in the CakeList, that cake's info (image, name, and category) should display in the CakeDisplay component.

The category should display as a dropdown, with the default value set to the category of the cake. (e.g. The dropdown of the Brexit Boris should have Soggy Bottomed as the default display value.)

STEP 4: FILTER CAKES BY CATEGORY
When a user changes the value of the select dropdown above the CakeList, the cakes displayed in the list should change accordingly:

the 'All' option should display all cakes
the 'Soggy Bottomed' option should display only Soggy Bottomed cakes
the 'Firm Bottomed' option should display only Firm Bottomed cakes
BONUS: CHANGE CAKE CATEGORY
The cake category displays as a select dropdown in the CakeDisplay component. When a user changes the value of the dropdown, this change should persist.

For example, if a user changes the category of 'Autumn Wonder' from Firm Bottomed to Soggy Bottomed, then this change should still be reflected on the page upon refresh.

BONUS 2: HIDE CAKES FROM THE LIST
When a user clicks on the 'Hide' button of a cake on the CakeList, it should delete the cake's name from the list. This change does not need to persist to the backend.
