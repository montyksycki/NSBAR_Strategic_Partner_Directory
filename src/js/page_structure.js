const console_connected = () => {
  console.log("connected");
};

const list_cards = () => {
  let cards = "";
  let card = "";
  partners.forEach((partner) => {
    if (partner.level == "platinum") {
      let card = `
        <div class="profile_card profile_card_border_${partner.level}">
          <a class="card_link" href="${partner.link}" target="_blank">
          <div class="grid_container_premium">
            <div class="grid_item grid_profile_header background_color_${
              partner.level
            }">
              <h3 class="font font_center level">${
                partner.level.charAt(0).toUpperCase() + partner.level.slice(1)
              } Strategic Partner</h3>
            </div>
            <div class="grid_item grid_profile_photo">
              <img
                class="profile_photo"
                src="http://nsbar.org/sites/default/files/${partner.photo}"
                alt=""
              />
            </div>
            <div class="grid_item grid_profile_logo">
              <img
                class="profile_logo"
                src="http://nsbar.org/sites/default/files/${partner.logo}"
                alt=""
              />
            </div>
            <div class="grid_item grid_profile_contact">
              <div class="contact_info">
                <h2 class="font font_center profile_name color_${
                  partner.level
                }">${partner.lead}</h2>
                <p
                  class="font font_center profile_email color_${partner.level}"
                  href=""
                >
                  ${partner.email_1}
                </p>
                <p
                  class="font font_center profile_email color_${partner.level}"
                  href=""
                >
                  ${partner.email_2}
                </p>
                <h3 class="font font_center profile_company color_${
                  partner.level
                }"></h3>
              </div>
            </div>
          </div>
        </a>
        </div>`;
      document.getElementById("profile_card_container").innerHTML += card;
    } else if (partner.level != "affiliate") {
      let card = `
        <div class="profile_card profile_card_border_${partner.level}">
          <a class="card_link" href="${partner.link}" target="_blank">
          <div class="grid_container">
            <div class="grid_item grid_profile_header background_color_${
              partner.level
            }">
              <h3 class="font font_center level">${
                partner.level.charAt(0).toUpperCase() + partner.level.slice(1)
              } Strategic Partner</h3>
            </div>
            <div class="grid_item grid_profile_logo">
              <img
                class="profile_logo"
                src="http://nsbar.org/sites/default/files/${partner.logo}"
                alt=""
              />
            </div>
            
            <div class="grid_item grid_profile_contact">
              <div class="contact_info">
                <h2 class="font font_center profile_name color_${
                  partner.level
                }">${partner.lead}</h2>
                <p
                  class="font font_center profile_email color_${partner.level}"
                  href=""
                >
                  ${partner.email_1}
                </p>
                <p
                  class="font font_center profile_email color_${partner.level}"
                  href=""
                >
                  ${partner.email_2}
                </p>
                <h3 class="font font_center profile_company color_${
                  partner.level
                }"></h3>
              </div>
            </div>
          </div>
        </a>
        </div>`;
      document.getElementById("profile_card_container").innerHTML += card;
    } else {
      let card = `
        <div class="profile_card profile_card_border_${partner.level}">
          <a class="card_link" href="${partner.link}" target="_blank">
            <div class="grid_container_affiliate">
              <div class="grid_item grid_profile_header background_color_${partner.level}">
              <h3 class="font font_center level affiliate">NSBAR ${partner.level.charAt(0).toUpperCase() + partner.level.slice(1)}</h3>
              </div>
              <div class="grid_item grid_profile_contact">
                <div class="contact_info">
                  <h2 class="font font_center profile_name color_${partner.level}">${partner.company}</h2>
                  <h2 class="font font_center profile_name color_${partner.level}">${partner.lead}</h2>
                  <p class="font font_center profile_email color_${partner.level}" href="">${partner.email_1}</p>
                  <p class="font font_center profile_email color_${partner.level}" href="">${partner.email_2}</p>
                  <h3 class="font font_center profile_company color_${partner.level}"></h3>
                </div>
              </div>
            </div>
          </a>
        </div>`;
      document.getElementById("profile_card_container").innerHTML += card;
    }
  });
};

onload = () => {
  console_connected();
  list_cards();
};
