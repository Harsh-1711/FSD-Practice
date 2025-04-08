import React from "react";

const links = [
  {
    name: "Outlook.com",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB174vsT?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://outlook.live.com/",
  },
  {
    name: "Flipkart",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAV4I8c?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Find a tutor",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1lMHlt?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.superprof.co.in/",
  },
  {
    name: "Booking.com",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA18wU7w?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.booking.com/",
  },
  {
    name: "Sports",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1aXAcH?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.msn.com/en-in/sports?ocid=StripeOCID",
  },
  {
    name: "Nykaa",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1vCtoU?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.nykaa.com/",
  },
  {
    name: "Games",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAGUW9m?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.msn.com/en-in/play?ocid=ogenin",
  },
  {
    name: "Shopping",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVfoma?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.bing.com/shop?entrypoint=msn&adunitId=378983&propertyId=316956&FORM=mstntb",
  },
  {
    name: "Facebook",
    icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBtDidm?w=27&h=27&q=60&m=6&f=png&u=t",
    url: "https://www.facebook.com/",
  },
];

const QuickLinks = () => {
  return (
    <div className="flex overflow-x-auto  justify-between  space-x-6 px-4  mx-30 ">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          className="flex flex-col items-center w-80 h-25 text-sm font-semibold cursor-pointer p-4 hover:bg-gray-200 rounded-md"
        >
          {link.icon.startsWith("http") ? (
            <img
              src={link.icon}
              alt={link.name}
              className="w-10 h-10 mb-1 bg-white p-2 rounded-md shadow shadow-gray-300"
            />
          ) : (
            <span className="text-2xl mb-1">{link.icon}</span>
          )}
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
