# Project Overview

## Project Links

- [Github](https://github.com/cjmccaskill/My-Journeys)
- [Deployed site](https://my-journeys-9fx6wjqm5-cjmccaskill.vercel.app/)

## Project Description

For this project, I am building out my blog site to have a place to post articles that I write about my journey into software development, food recipes, and my travels around the globe. I will build the site as a React app and build out my own API database to store my blog post and media.

## API

Here is a sample code snippet from the api that I built for this project.

```
{data: {   "fields": {
        "title": "Automate with webhooks",
        "heroImage": {}
        },
        "slug": "automate-with-webhooks",
        "description": "Webhooks notify you, another person or system when resources have changed by calling a given HTTP endpoint.",
        "body": "## What are webhooks?\n\nThe webhooks are used to notify you when content has been changed. Specify a URL, configure your webhook, and we will send an HTTP POST request whenever something happens to your content.\n\n## How do I configure a webhook?\n\nGo to Settings → Webhooks from the navigation bar at the top. From there, hit Add webhook, and you will be directed to your new webhook. Then choose a name, put in the information of your HTTP endpoint (URL and authentication), specify any custom headers and select the types of events that should trigger the webhook.\n\n## Why do I get an old version in the CDA?\n\nAs the delivery API is powered by a CDN network consisting of hundreds of servers distributed across continents, it takes some time (up to a few minutes) to reflect the changes to the published content. This must be taken into consideration when reacting to webhooks. In normal conditions, there could be a reasonable delay of 2 to 5 minutes.\n\nExtracted from the [Webhooks FAQ](https://www.contentful.com/faq/webhooks/ \"Webhooks FAQ\").",
        "author": {}
        },
        "publishDate": "2017-05-12T00:00+02:00",
        "tags": [
          "javascript"
        ]} }
```

## Wireframes

- [Project wireframes](https://res.cloudinary.com/mccaskillmediagroup/image/upload/v1627664181/Blog%20wireframe.heic)
- [Project architecture](https://wireframepro.mockflow.com/view/M2c2fac4e009957396a73fb0641486d8b1627664733544#/page/efdc352914ca4c2fa917770d69a519db)

### MVP/PostMVP -

#### MVP EXAMPLE

- Landing page for the Blog
  - Header with a nav link
  - Hero
  - List of posted blogs
  - Footer with follow me links
- Render data from the API to popluate the page with blog post
- Allow user to click on a post to open on a new page

#### PostMVP EXAMPLE

- Add Search input for the blog post to search by topic or tags
- Add in a random hero image generator to change the hero image
- Add about author section/pop out component

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |
| Hero      |             Landing page image on the landin page             |
| Blog list |  Will render the complete lis of blog post from the API call  |
| Idv. Blog |    When a user selects a post it will render on a new page    |

Time frames are also vital in the development cycle. You have limited time to code all phases of the app. Your estimates can then be used to evaluate app possibilities based on the time needed and the actual time before the app must be submitted. It's always best to pad the time by a few hours to account for the unknown, adding an additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Actual Time |
| ---------------- | :------: | :------------: | :---------: |
| Design Structure |    H     |      4hrs      |    4hrs     |
| APP              |    H     |      3hrs      |    3hrs     |
| Header           |    H     |      2hrs      |     hrs     |
| Footer           |    H     |      2hrs      |     1hr     |
| Hero             |    H     |      2hrs      |     1hr     |
| Blog List        |    H     |      3hrs      |    3hrs     |
| Idv Blog page    |    H     |      3hrs      |     hrs     |
| Working with API |    H     |      3hrs      |    3hrs     |
| Styling content  |    H     |      3hrs      |     hrs     |
| Debugging        |    H     |      3hrs      |     hrs     |
| Total            |    H     |      28rs      |     hrs     |

## Additional Libraries

-React
-Sass

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
