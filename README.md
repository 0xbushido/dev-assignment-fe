# Frontend Developer Assignment

## Objective
You will initially be given a bare-bones web application, this will have two tabs which will have no content - Supply and Staking tabs,
your goal is to create 2 charts each mentioned below for each of the supply and staking pages, so 4 charts in total.

NOTE: Please add tooltips for each chart

## Selection Criteria:
We will judge your project on the basis of:
1) Overall Design - How visually appealing your charts and design scheme is and how well it fits into the existing design of the pages.
2) Ability to fetch data from the API and present it in the manner which has been asked for
3) Attention to detail - How detailed your work is and whether enough attention has been paid to each detail which has been asked for

## Extra Points
1) Extra Points for your work will be taken into consideration if you can host your static web app via Cloudflare Pages (Hosting is free)
- If you are about to host, please let us know first so we can add your domain to our backend CORS to prevent API blocking
2) Extra points for making the design mobile-friendly
  
Here are the details for each chart and the tab they should be a part of:
## Supply Tab:
### 1) Chart 1: `Historical Price & Volume Chart` - Line Chart
- You will need to add a toggle button to allow users to toggle between All Time & 30D time frames and see the 30D and All Time charts.
- You need to plot price and volume in the same chart. Use a secondary Y axis to plot the volume. X axis will be the dates.
- You will get the data from the `api_url.json` file API URL under the config directory.
- Endpoint is: `https://morpheus-ai-metrics-a9febnfedac6a6fx.centralus-01.azurewebsites.net/prices_and_trading_volume`
- This is what we expect the chart to resemble:
- ![image](https://github.com/user-attachments/assets/207bb158-1909-4124-96fa-14b699cc3e0e)

### 2) Chart 2: `Historical Price & Volume Chart` - Line Chart
- You will need to add a toggle button to allow users to toggle between All Time & 30D time frames and see the 30D and All Time charts.
- Y axis will be the supply amount and X axis will be the dates.
- Endpoint is: `https://morpheus-ai-metrics-a9febnfedac6a6fx.centralus-01.azurewebsites.net/total_and_circ_supply`
- This is what we expect the chart to resemble:
- ![image](https://github.com/user-attachments/assets/afc744f7-3d69-424c-bd90-2638fc2b8aec)

## Staking Tab:
### 1) Chart 1: `Cumulative Stakers Over Time` - Line Chart
- Endpoint is: `https://morpheus-ai-metrics-a9febnfedac6a6fx.centralus-01.azurewebsites.net/analyze-mor-stakers` and under the `daily_unique_stakers` key
- You need to take this daily data and plot it in a cumulative manner to show the upward trend in Stakers over time.
- This is what we expect the chart to resemble:
- ![image](https://github.com/user-attachments/assets/abc37167-9377-42d3-8cfe-49abad4d425c)


### 2) Chart 2: `Power Multiplier Distribution For Stakers` - Donut Chart
- Add a detailed legend which should be clickable
- When a legend icon is clicked, it should highlight the respective sector while greying out the rest of the sectors.
- Endpoint is: `https://morpheus-ai-metrics-a9febnfedac6a6fx.centralus-01.azurewebsites.net/get_stake_info` under `power_multiplier` key
- This is what we expect the chart to resemble:
- ![image](https://github.com/user-attachments/assets/22884e5c-5e8b-4478-86d9-f19197260579)
- ![image](https://github.com/user-attachments/assets/16db40a2-8176-4439-87ca-7b18c1244cb0)

### Steps to get started:
1) Clone this repository
2) `npm install` all dependencies
3) Add your code to the locally cloned repo and test it using `npm start`

### Submission:
- To submit the project, please raise a PR to this repository itself and we'll take a look.
- If hosted via cloudflare pages, please share the link to the hosted dashboard instead of a PR
