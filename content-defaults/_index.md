---
# Homepage Content - Default Template
# ====================================
# This is the default homepage content structure.
# Client-specific content can override this via blob storage.

title: "Heritage Register"
govuk: false

hero:
  title: "Welcome to the Heritage Register"
  abstract: "The official register of historic places. Begin searching the register below."
  buttonText: "Search the Register"

getStarted:
  - title: "What are the Historic Records?"
    icon: "archive"
    url: "#archive"
    showText: false
    text: ""

  - title: "How to Search"
    icon: "search"
    url: "#search"
    showText: false
    text: ""

  - title: "Useful Information"
    icon: "alert-information"
    url: "#useful-information"
    showText: false
    text: ""

historicalRecords:
  title: "What are the Historical Records"
  id: "archive"
  showImage: true
  text: "The heritage register contains records of historic places of cultural significance. These records document buildings, structures, landscapes, and archaeological sites that represent our shared heritage."

search:
  title: "How to Search"
  id: "search"
  text: "Use our search tools to find heritage records by location, name, or type. You can filter results and explore detailed information about each asset."

  cards:
    - title: "Search multiple fields"
      text: "Search via certain terms or categories such as address or reference number."
      link: "Search the Register"
      image: "img/tutorial-category.png"
      imageAlt: "Search filter page displaying categories"
    - title: "Filtering"
      text: "You can filter different types of asset by clicking the drop down to expand."
      link: "Search the Register"
      image: "img/tutorial-type.png"
      imageAlt: "Search filter page displaying record type"
    - title: "Download Information"
      text: "You can download information for each asset including location data, images, and descriptions."
      link: "Search the Register"
      image: "img/tutorial-location.png"
      imageAlt: "Asset page showing the location tab"

usefulLinks:
  title: "Useful Links"
  id: "useful-information"
  links:
    - title: "FAQ"
      url: "/faq"
    - title: "Contact Us"
      url: "/contact"
---
