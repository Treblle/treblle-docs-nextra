---
title: AI Assistant
description: Alfred is an AI Assistant that helps API consumers adopt and integrate APIs 10x faster.
---

<iframe class="w-full aspect-[16/9]" src="https://www.youtube.com/embed/ifXv_Zrxi9o?si=dEI82ErbsO5x18TD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### What is Alfred?

Alfred is an AI Assistant that helps API consumers adopt and integrate APIs 10x faster. Key functionalities and capabilities include: 

- **Code generation**: Alfred can generate endpoint specific integration code and/or data models in any language in the world
- **Onboarding support**: Alfred offers shortcuts to help consumers understand the basics like: base URLs, Authentication methods and endpoints
- **API Key Discovery**: Alfred can recognize the end consumer on the portal and can instantly generate or show their personal API Key
- **Quality assessment**: Alfred integrates with API Insights to provide detailed API quality insights across design patterns, performance and security 
- **API Discoverability**: Alfred knows all the API endpoints and can provide detailed explanation and guided tours for any of them
- **Debugging Support**: Alfred automatically integrates with Treblle's observability capabilities and allows consumers to see recent requests they're making
- **Live support**: Alfred can offer agent like support to consumer about API related topics

### What does Alfred do?

Alfred helps organizations drive the following outcomes: 

- up to **10x API Adoption Rate**: Customers using Alfred on their developer portals report a 10 times greater adoption rate than before using Alfred
- up to **10x Faster Integration Time:** Customers using Alfred see a reduction in the time to first request by 500%
- up to **5x decrease in Integration Support**: Alfred customers have reported a 5x decrease in the amount of integration support needed before the first request
- up to **5x Developer Experience Improvement**: Developers love Alfred because it speaks their language and helps them onboard faster and generate a lot of boilerplate code faster
- up to **5x Revenue Growth**:  Alfred streamlines the entire process of API integration, adoption and support that results in a significant increase in API revenue

### How to get started?

To get started with Alfred you need to:

1. [Create an account on Treblle](https://app.treblle.com/register)
2. Create your [API project](/platform/projects/) on Treblle
3. Upload your OpenAPI Specific or [integrate the Treblle SDK](/integrations/)
4. Integrate the Alfred embed code to your developer portal or use an automatically generated developer portal on Treblle

> Keep in mind that Alfred is available only on paid plans that start for
> as low as $99 per month. For our Enterprise plans please [contact our
> enterprise support team](https://www.treblle.com/book-a-demo) and let them guide you through the entire
> process.

### How to use Alfred without integrating the Treblle SDK?

You can use Alfred without integrating the Treblle SDK simply by creating a project and then under project settings uploading your OpenAPI specification. Alfred will then use that specification to generate the needed data for Alfred and all of its services. Keep in mind by manually uploading the specification you need to update it whenever your documentation changes so Alfred can keep track of the recent updates. The OpenAPI Specfication must be version 3 or above. 

### How to integrate Alfred into your developer portal?

1. Include the Alfred JS Embed code into your developer portal

```html
<script src="https://assets.treblle.com/alfred-embed-v4.min.js"></script>
```
> Tip: You can place the snippet right above the end `</body>` tag of
> your developer portal to avoid page rendering blocking.

2. Add the following HTML code snippet to your developer portal

```html 
<div class="getalfred-io" data-api="_YOUR_TREBLLE_PROJECT_ID_" data-auth="_YOUR_CUSTOMER_API_KEY_"></div>
```

Make sure you replace the following values with your specific ones:

* *_YOUR_TREBLLE_PROJECT_ID_* => The project ID for your API on Treblle
* *_YOUR_CUSTOMER_API_KEY_* => This are the authentication details for your end customer. This helps Alfred automaticlly append the customers auth details into things like: integration support, getting started guides and similar. This value can be dynamically changed every time the key changes and Alfred will always use the most up to date key. For most customers this will simply be the value of the Bearer token or a username and password.

### How to use Alfred with automatically generated developer portal on Treblle?

To get started with automatically generated developer portals you first need to integrate the Treblle SDK. You can find the integration guides for more than 25 different language and gateways [right here](/integrations/). Once you’ve integrated the SDK Treblle will automatically generate documentation for your API and a developer portal with Alfred.

### Does Alfred train AI models with your API data?

No. Treblle does not use your OpenAPI Specfication nor data collected from the Treblle SDK to train large language models. That is done by using customized and publicly sourced data that helps Alfred better understand APIs. 