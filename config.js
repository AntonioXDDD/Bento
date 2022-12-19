//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream
//
const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Antonio",
  openInNewTab: true,
  title: "Bento",

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,
  
  // Theme
  theme: "bento",
  imageBackground: false,
  imageUrl: "background.jpg", // place in ./src/assets/images/ and provide the file name. Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  themes: [   // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    "arc",
    "bento",
    "catppuccin-frappe",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "conceptdark", // dark mode only
    "monokai",
    "nord",
    "sakura",
    "solarized",
    "summer"
  ],

  // Search Bar
  searchBar: true,
  searchEngine: "google", // google, ddg
  barStyle: "bento", // bento, minimal, boxy, rounded
  barPlaceholder: "", // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: "Good morning",
  greetingAfternoon: "Good afternoon",
  greetingEvening: "Good evening",
  greetingNight: "Sweet dreams",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "123457f7145af7d5d775e2d16368ce0cd4696", // Write here your API Key
  weatherIcons: "White", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: "14.6705",
  defaultLongitude: "-86.2183",

  // Autochange theme from OS preferece - The below options are all mutually exclusive. If you've got multiple set to true, the first one will be set and the rest ignored.
  changeThemeByOS: false,

  // Switch theme based on set hours. (24hr format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // Switch dark theme automatically from sunrise to sunset. Pulls from the browsers location, or falls back to the defaults if not.
  // Requires an OpenWeatherMap API key.
  changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1", // entry ID, don't modify.
      name: "YouTube", // set the name of the card
      icon: "youtube", // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
      link: "https://www.youtube.com/" // provide a link to the page.
    },
    {
      id: '2',
			name: 'Spotify',
			icon: 'headphones',
			link: 'https://open.spotify.com/',
    },
    {
      id: '3',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/',
    },
    {
      id: '4',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home?lang=es',
    },
    {
      id: '5',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/?lang=es',
    },
    {
      id: '6',
			name: 'WhatsApp',
			icon: 'message-circle',
			link: 'https://web.whatsapp.com/',
    }
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "fab-spotify",
      link: "https://open.spotify.com"
    },
    {
      id: "2",
      name: "twitter",
      icon: "fab-twitter",
      link: "https://twitter.com/"
    },
    {
      id: "3",
      name: "bot",
      icon: "fab-discord",
      link: "https://discord.com/app"
    },
    {
      id: "4",
      name: "Amazon",
      icon: "fab-amazon",
      link: "https://amazon.com/"
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "fab-hashnode",
      link: "https://hashnode.com/"
    },
    {
      id: "6",
      name: "Figma",
      icon: "fab-figma",
      link: "https://figma.com/"
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'Music',
			id: '1',
			links: [
				{
					name: 'Pop',
					link: 'https://open.spotify.com/playlist/5EE4SUBzRXumAw95FUBdFR?si=99f6e0284a9a42f3&pt=0a22c232d5065f89c9b9b6ada4b685a9',
				},
				{
					name: 'Spanish',
					link: 'https://open.spotify.com/playlist/2oTSRO3uqHSgIvAOAnzY3v?si=0b22835f1b714e3e&pt=64a51fdb842607a27213b190a5ba3222',
				},
				{
					name: 'Indie',
					link: 'https://open.spotify.com/playlist/6TeAloMD7rocaNI5AJgbPX?si=50e603d42ff54849',
				},
				{
					name: 'Classical',
					link: 'https://open.spotify.com/playlist/3cItfAKnz7yulMmEpQyO8O?si=c5f4b695cf244186',
        }
      ]
    },
    {
      icon: 'layout-grid',
			id: '2',
			links: [
				{
					name: 'Github',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Crunchypobre',
					link: 'https://www.trello.com',
				},
				{
					name: 'Duolingo',
					link: 'https://www.slack.com',
        }
      ]
    }
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "house-user",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com"
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com"
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com"
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com"
        }
      ]
    },
    {
      icon: "fab-github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/"
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/"
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/"
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila"
        }
      ]
    }
  ],

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: true,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: true
  }

};

export const config = CONFIG;
