




/* Other CSS rules remain unchanged */

const founderMessages = [
   {
     title: "Founder's Thoughts",
     message: `
       From Our Founder
       As we celebrate our achievements, we are filled with optimism about our future prospects.
     `,
     name: "A.D. Meenaachi Sundram",
     position: "FOUNDER AND MANAGING PARTNER",
     image: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
   },
   {
     title: "Manager's Vision",
     message: `
       Our journey is one of constant innovation and adaptation to the evolving business environment. We continue to inspire new generations.
     `,
     name: "M. Vetrivel Rajan",
     position: "MANAGING PARTNER",
     image: "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg",
   },
   {
     title: "Partner's Mission",
     message: `
       We are driven by the desire to create sustainable solutions that enhance the quality of life globally. Our mission stands strong as we expand internationally.
     `,
     name: "B.Murugeshwari",
     position: "PARTNER",
     image: "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
   }
 ];
 const scrollToSection = (elementRef) => {
  elementRef.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

 const navLinks = (
  <NavLinks key={1}>
    <NavLink onClick={() => scrollToSection(refs.homeRef)} style={{ color: "#0ed1b2" }}>Home</NavLink>
    <NavLink onClick={() => scrollToSection(refs.projectRef)} style={{ color: isScrolled ? "black" : "black" }}>Projects</NavLink>
    <NavLink onClick={() => scrollToSection(refs.EqpRef)} style={{ color: isScrolled ? "black" : "black" }}>Equipments</NavLink>
    <NavLink onClick={() => scrollToSection(refs.TeamRef)} style={{ color: isScrolled ? "black" : "black" }}>Team</NavLink>

    {/* Careers with Dropdown */}
  
      <NavLink style={{ color: isScrolled ? "black" : "black" }} className="career-link"  onClick={() => scrollToSection(refs.CareerRef)}>Careers</NavLink>
      {/* <DropdownMenu>
        <DropdownItem onClick={handleJobOpeningsClick}>Job Openings</DropdownItem>
      </DropdownMenu> */}


    <NavLink onClick={() => scrollToSection(refs.ContactRef)} style={{ color: isScrolled ? "black" : "black" }}>Contact Us</NavLink>
  </NavLinks>
);