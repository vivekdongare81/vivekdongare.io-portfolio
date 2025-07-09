import React from "react";
import Image from "next/image";
import { footer } from "@/data/global";

const SocialLinks = ({ className = "" }) => {
  const socialCol = footer.columns.find(col => col.title === "Social");
  if (!socialCol) return null;

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialCol.links.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
          className="flex items-center"
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.name}
              width={22}
              height={22}
              className="hover:opacity-80 transition-opacity"
              style={item.name === "GitHub" ? { filter: "invert(1)" } : {}}
            />
          )}
          <span className="ml-1 text-xs text-white hidden sm:inline">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 