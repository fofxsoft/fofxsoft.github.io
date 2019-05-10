onmessage = function(event) {
    for (let i = 0; i < event.data.keys.length; i += 1) {
        for (let j = 0; j < event.data.items[event.data.keys[i]].length; j += 1) {
            const item = event.data.items[event.data.keys[i]][j];
            const age = new Date() - item.Date;

            let ageDisplay = `${item.Date.getMonth() + 1}/${item.Date.getDate()}/${item.Date.getFullYear()} ${item.Date.getHours() % 12 ? item.Date.getHours() % 12 : 12}:${item.Date.getMinutes() < 10 ? `0${item.Date.getMinutes()}` : item.Date.getMinutes()} ${item.Date.getHours() >= 12 ? "PM" : "AM"}`;

            if (age < 60000) {
                ageDisplay = "Just now";
            }

            if (age < 3600000 && age >= 120000) {
                ageDisplay = `${Math.floor(age / 60000)} minutes ago`;
            }

            if (age < 3600000) {
                ageDisplay = `${Math.floor(age / 60000)} minute ago`;
            }

            if (age < 86400000 && age >= 7200000) {
                ageDisplay = `${Math.floor(age / 3600000)} hours ago`;
            }

            if (age < 86400000) {
                ageDisplay = `${Math.floor(age / 3600000)} hour ago`;
            }

            if (age < 604800000 && age >= 172800000) {
                ageDisplay = `${Math.floor(age / 86400000)} days ago`;
            }

            if (age < 604800000) {
                ageDisplay = `${Math.floor(age / 86400000)} day ago`;
            }

            let contact = "";

            if (item.Customer.Email && item.Customer.Email !== "") {
                if (contact !== "") {
                    contact += " - ";
                }

                contact += item.Customer.Email;
            }

            if (item.Customer.Phone && item.Customer.Phone !== "") {
                if (contact !== "") {
                    contact += " - ";
                }

                contact += item.Customer.Phone;
            }

            switch (item.Type) {
                case "Task":
                    postMessage(`
                        <div class="lm-feed-item lm-${item.Type.toLowerCase().replace(/ /g, "-")}" style="order: ${age};">
                            <div class="lm-feed-item-body">
                                <div class="lm-avatar">
                                    <div class="lm-avatar-img" style="${item.User.Picture && item.User.Picture !== "" ? `background-image: url('${item.User.Picture}');` : ""}"></div>
                                </div>
                                <div class="lm-info">
                                    <div class="lm-item-action"><span class="lm-who">${item.User.FriendlyName}</span> added a task detail<span class="lm-date-display">${ageDisplay}</span></div>
                                    <div class="lm-item-customer">${item.Customer.Company || ""}</div>
                                    <div class="lm-item-contact">${contact}</div>
                                    <div class="lm-item-subject">${item.Subject || ""}</div>
                                    <div class="lm-item-body">
                                        <p>${item.Body || ""}</p>
                                        <p class="lm-body-more"></p>
                                    </div>
                                    <p class="lm-more-link">More</p>
                                </div>
                            </div>
                        </div>
                    `);

                    break;

                case "Note":
                    postMessage(`
                        <div class="lm-feed-item lm-${item.Type.toLowerCase().replace(/ /g, "-")}" style="order: ${age};">
                            <div class="lm-feed-item-body">
                                <div class="lm-avatar">
                                    <div class="lm-avatar-img" style="${item.User.Picture && item.User.Picture !== "" ? `background-image: url('${item.User.Picture}');` : ""}"></div>
                                </div>
                                <div class="lm-info">
                                    <div class="lm-item-action"><span class="lm-who">${item.User.FriendlyName}</span> added a note<span class="lm-date-display">${ageDisplay}</span></div>
                                    <div class="lm-item-customer">${item.Customer.Company || ""}</div>
                                    <div class="lm-item-contact">${contact}</div>
                                    <div class="lm-item-subject">${item.Subject || ""}</div>
                                    <div class="lm-item-body">
                                        <p>${item.Body || ""}</p>
                                        <p class="lm-body-more"></p>
                                    </div>
                                    <p class="lm-more-link">More</p>
                                </div>
                            </div>
                        </div>
                    `);

                    break;

                case "Received Email":
                    postMessage(`
                        <div class="lm-feed-item lm-${item.Type.toLowerCase().replace(/ /g, "-")}" style="order: ${age};">
                            <div class="lm-feed-item-body">
                                <div class="lm-avatar">
                                    <div class="lm-avatar-img"></div>
                                </div>
                                <div class="lm-info">
                                    <div class="lm-item-action"><span class="lm-who">${item.User.FriendlyName}</span> recieved an email ${item.Customer.Contact && item.Customer.Contact !== "" ? `from <span class="lm-who">${item.Customer.Contact}</span>` : ""}<span class="lm-date-display">${ageDisplay}</span></div>
                                    <div class="lm-item-customer">${item.Customer.Company || ""}</div>
                                    <div class="lm-item-contact">${contact}</div>
                                    <div class="lm-item-subject">${item.Subject || ""}</div>
                                    <div class="lm-item-body">
                                        <p>${item.Body || ""}</p>
                                        <p class="lm-body-more"></p>
                                    </div>
                                    <p class="lm-more-link">More</p>
                                </div>
                            </div>
                        </div>
                    `);

                    break;

                case "Sent Email":
                    postMessage(`
                        <div class="lm-feed-item lm-${item.Type.toLowerCase().replace(/ /g, "-")}" style="order: ${age};">
                            <div class="lm-feed-item-body">
                                <div class="lm-avatar">
                                    <div class="lm-avatar-img" style="${item.User.Picture && item.User.Picture !== "" ? `background-image: url('${item.User.Picture}');` : ""}"></div>
                                </div>
                                <div class="lm-info">
                                    <div class="lm-item-action"><span class="lm-who">${item.User.FriendlyName}</span> sent an email ${item.Customer.Contact && item.Customer.Contact !== "" ? `to <span class="lm-who">${item.Customer.Contact}</span>` : ""}<span class="lm-date-display">${ageDisplay}</span></div>
                                    <div class="lm-item-customer">${item.Customer.Company || ""}</div>
                                    <div class="lm-item-contact">${contact}</div>
                                    <div class="lm-item-subject">${item.Subject || ""}</div>
                                    <div class="lm-item-body">
                                        <p>${item.Body || ""}</p>
                                        <p class="lm-body-more"></p>
                                    </div>
                                    <p class="lm-more-link">More</p>
                                </div>
                            </div>
                        </div>
                    `);

                    break;

                case "Event":
                    postMessage(`
                        <div class="lm-feed-item lm-${item.Type.toLowerCase().replace(/ /g, "-")}" style="order: ${age};">
                            <div class="lm-feed-item-body">
                                <div class="lm-avatar">
                                    <div class="lm-avatar-img" style="${item.User.Picture && item.User.Picture !== "" ? `background-image: url('${item.User.Picture}');` : ""}"></div>
                                </div>
                                <div class="lm-info">
                                    <div class="lm-item-action"><span class="lm-who">${item.User.FriendlyName}</span> created an event<span class="lm-date-display">${ageDisplay}</span></div>
                                    <div class="lm-item-customer">${item.Customer.Company || ""}</div>
                                    <div class="lm-item-subject">${item.Subject || ""}</div>
                                    <div class="lm-item-body">
                                        <p>
                                            ${item.Body || ""}
                                            ${item.Attributes.Attendees && item.Attributes.Attendees.length > 0 ? `<br><br><b>Attendees</b><br>${item.Attributes.Attendees.join("<br>")}` : ""}
                                        </p>
                                        <p class="lm-body-more"></p>
                                    </div>
                                    <p class="lm-more-link">More</p>
                                </div>
                            </div>
                        </div>
                    `);

                    break;
            }
        }
    }
}
