import {fetcher} from "@/lib/api/fetcher";

export async function getStrapiData() {
    const res = await fetcher([query, {}]);
    return {
        preview: res
    }
}

const query =
    `fragment Categories on Query {
      categories {
        data {
          id
          attributes {
            name
            foods {
              data {
                id
                attributes {
                  name
                  opisanie
                  calories
                  cena
                  rating
                  massa
                  foto {
                    data {
                      attributes {
                          name
                          width
                          height
                          url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
}

query GetPages {  
      ...Categories
      homepage {
         data {
           attributes{
            header {
                  titleHeader
                  logoHeader {
                    titleImg
                    alt
                    imgUrl {
                      data {
                        attributes {
                          name
                          width
                          height
                          url
                        }
                      }
                    }
                  }
                }
            preview {
              titlePreview
              descriptionPreview
              link
              buttonPreview {
                label
                url
              }
            }
            about {
              titleAbout
              textAbout
              link
              gallereya {
                data {
                  attributes {
                    name
                    width
                    height
                    url
                  }
                }
              }
            }
            topMenu{
              titleMenu
              buttonMenu {
                label
                url
              }
              foodList {
                titleList
                foods {
                  data {
                    attributes {
                      name
                      opisanie
                      calories
                      cena
                      rating
                      massa
                      foto {
                        data {
                          attributes {
                              name
                              width
                              height
                              url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            widgetOrder {
                form{
                      titleForm
                      descriptionForm
                      titleSuccess
                      descriptionSuccess
                 }
                 input {
                      nameInput
                      label
                      placeholder
                      required
                 }
                 button {
                      label
                      url
                 }
            }
            contacts {
              title
              tel
              email
              address
              workingTime
            }
           }
         }
      }
}`;