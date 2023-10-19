import React from 'react'

const offers = [
    {
        name: 'Starter',
        state: true,
        price: 'free',
        package: [
            "20 Videos",
            "20 Stories",
            "5 free grandmas Hut Access",
            "1 device access"
        ]
    },
    {
        name: 'Silver',
        state: false,
        price: 'N*****',
        package: [
            "50 Videos",
            "50 Stories",
            "20 free grandmas Hut Access",
            "2 device access",
            "Censoring",
            "Child Activity Control"
        ]
    },
    {
        name: 'Gold',
        state: false,
        price: 'N*****',
        package: [
            "50 Videos",
            "50 Stories",
            "20 free grandmas Hut Access",
            "4+ device access",
            "Censoring",
            "Child Activity Control",
            "Locking Device",
            "20% Discout on Anual Purchase"
        ]
    }
]

const Pricing = () => {

  return (
    <section>
      <h2>Pricing</h2>
      <div>
        <div>
            <h2>Starter</h2>
        </div>
      </div>
    </section>
  )
}

export default Pricing
