const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: "",
});

(async () => {
  const classify = await cohere.classify({
      examples: [
          { text: "First Name", label: "First Name" },
          { text: "Given Name", label: "First Name" },
          { text: "Forname", label: "First Name" },
          { text: "Personal Name", label: "First Name" },
          { text: "Your Name", label: "First Name" },
          { text: "Legal First Name", label: "First Name" },
          { text: "First Name as on ID", label: "First Name" },
          { text: "Name on Birth Certificate", label: "First Name" },
          { text: "Preferred Name", label: "First Name" },

          { text: "Last Name", label: "Last Name" },
          { text: "Surname", label: "Last Name" },
          { text: "Family Name", label: "Last Name" },
          { text: "Maiden Name", label: "Last Name" },
          { text: "Birth Name", label: "Last Name" },
          { text: "Legal Last Name", label: "Last Name" },
          { text: "Family Surname", label: "Last Name" },
          { text: "Your Surname", label: "Last Name" },

          {text: "Health Card Number", label: "Health Card Number" },
          {text: "Health Number", label: "Health Card Number" },

          { text: "Address", label: "Address" },
          { text: "Street Address", label: "Address" },
          { text: "Residence", label: "Address" },
          { text: "Home Address", label: "Address" },
          { text: "Current Address", label: "Address" },
          { text: "Street and Number", label: "Address" },
          { text: "Place of Residence", label: "Address" },

          { text: "ZIP Code", label: "ZIP Code" },
          { text: "Postal Code", label: "ZIP Code" },
          { text: "Postal ZIP", label: "ZIP Code" },
          { text: "ZIP/Postal Code", label: "ZIP Code" },
          { text: "Area Code", label: "ZIP Code" },

          { text: "City", label: "City" },
          { text: "Municipality", label: "City" },
          { text: "Town", label: "City" },

          { text: "Province", label: "Province" },
          { text: "State", label: "Province" },

          { text: "Country", label: "Country" },
          { text: "Nation", label: "Country" },

          { text: "Phone Number", label: "Phone Number" },
          { text: "Telephone Number", label: "Phone Number" },
          { text: "Mobile Number", label: "Phone Number" },
          { text: "Cell Phone Number", label: "Phone Number" },
          { text: "Contact Number", label: "Phone Number" },
          { text: "Primary Phone Number", label: "Phone Number" },
          { text: "Personal Phone Number", label: "Phone Number" },

      ],
      inputs: [
          "Place of Residence",
          "City/Town",
      ],
  })

  console.log(classify);
})();