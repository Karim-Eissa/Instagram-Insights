# Instagram Insights App

## Overview

The Instagram Insights App is a web application designed to help users identify which Instagram accounts they follow but who do not follow them back. The application compares two JSON files—one for followers and one for followings—and displays a list of users who are not reciprocating the follow. The results are shown as clickable links to the Instagram profiles.

## Features

- **File Upload**: Upload JSON files containing your Instagram followers and followings.
- **Comparison**: Identifies users you follow who do not follow you back.
- **Results Display**: Shows results as clickable profile links.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **HTML5**: Structure of the webpage.
- **CSS3**: Styling and responsive design using Flexbox.
- **JavaScript**: Logic for comparing followers and followings, handling file input/output.
- **FileReader API**: To read JSON files directly in the browser.

## How to Use

1. **Download Instagram Data**:
   - Request your data from Instagram under Settings > Accounts Center > Your information and permissions > Download your information.
   - **Important:** Ensure that you download the data in JSON format rather than HTML format. The app only supports JSON files. 
2. **Upload Files**:
   - Upload your `followers.json` and `followings.json` files using the file inputs on the web page.

3. **Check Results**:
   - Click the "Check" button to see a list of users you follow who do not follow you back. Each username is displayed as a clickable link to their Instagram profile.

