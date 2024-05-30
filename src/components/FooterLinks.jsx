import React from "react";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="">
      <h2 className="font-palanquin font-bold text-xl">{title}</h2>
      <div className="mt-3">
        {links.map((link, i) => (
          <p key={i} className="text-slate-gray">
            <a href={link.link}>{link.name}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
