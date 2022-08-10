import React from "react";
import IconLink from "../core/IconLink";
import Title from "../core/Title";

function Footer() {
  return (
    <footer className='py-12 flex items-center justify-between' >
      <Title title="Contact" />
      <div className="flex space-x-4">
        {/*<IconLink label="Github" href="https://github.com/aitor-react"/>*/}
        {/*<IconLink label="Linkedin" href="https://www.linkedin.com/in/aitoralonsocantero/"/>*/}
      </div>
    </footer >
  );
}

export default Footer;