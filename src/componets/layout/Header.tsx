"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore, ExpandLess } from "@mui/icons-material";
import Image from "next/image";
import TopBar from "../ui/TopBar";
import { navdropdowns } from "../../lib/utils";

export default function Header() {
  const pathname = usePathname();

  const [desktopAnchor, setDesktopAnchor] = useState<null | HTMLElement>(null);
  const [currentDropdown, setCurrentDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);



  const isLinkActive = (linkHref: string) => pathname === linkHref;
  const isDropdownActive = (dropdownLinks: { href: string }[]) =>
    dropdownLinks.some((link) => isLinkActive(link.href));

  const handleDropdownOpen = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setDesktopAnchor(event.currentTarget);
    setCurrentDropdown(index);
  };
  const handleDropdownClose = () => {
    setDesktopAnchor(null);
    setCurrentDropdown(null);
  };

  return (
    <>
      <TopBar />

      {/* Desktop & Mobile Navbar */}
      <div className="bg-white sticky top-0 shadow z-[1100]">
        <div className="max-w-[1440px] mx-auto px-4">
          <AppBar position="sticky" color="default" sx={{ bgcolor: "#fff", boxShadow: 0,top: 0,
              zIndex: 1100, }}>
            <Toolbar sx={{ justifyContent: "space-between", px: { xs: 0, md: 0 }, py: { xs: 1 } }}>
              {/* Logo */}
          <Link href="/" className="relative inline-block w-[100px] h-[50px]">
  <Image
    src="/images/logo.png"
    alt="Company Logo"
    fill
    className="object-contain"
    sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px, 150px"
  />
</Link>


              {/* Desktop Nav */}
              <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 2 }}>
                {/* Home */}
                <Button
                  component={Link}
                  href="/"
                  sx={{
                    color: isLinkActive("/") ? "#7a0706" : "#261b7d",
                    fontWeight: isLinkActive("/") ? 500 : 500,
                    borderBottom: isLinkActive("/") ? "2px solid #7a0706" : "2px solid transparent",
                    borderRadius: 0,
                    minWidth: "auto",
                    px: 1,
                    pb: 0.5,
                    "&:hover": { color: "#7a0706", backgroundColor: "transparent" },
                  }}
                >
                  Home
                </Button>
                {/* Dropdowns */}
                {navdropdowns.map((dropdown, index) => (
                  <Box key={index}>
                    <Button
                      endIcon={<ExpandMore />}
                      onClick={(e) => handleDropdownOpen(e, index)}
                      sx={{
                        color: isDropdownActive(dropdown.links) ? "#7a0706" : "#261b7d",
                        fontWeight: isDropdownActive(dropdown.links) ? 500 : 500,
                        borderBottom: isDropdownActive(dropdown.links)
                          ? "2px solid #7a0706"
                          : "2px solid transparent",
                        borderRadius: 0,
                        fontSize:"14px",
                        minWidth: "auto",
                        px: 1,
                        pb: 0.5,
                        "&:hover": { color: "#7a0706", backgroundColor: "transparent" },
                      }}
                    >
                      {dropdown.title}
                    </Button>
                    <Menu
                      anchorEl={desktopAnchor}
                      open={currentDropdown === index}
                      onClose={handleDropdownClose}
                      MenuListProps={{ "aria-labelledby": `menu-${index}` }}
                    >
                      {dropdown.links.map((link, i) => (
                        <MenuItem
                          key={i}
                          component={link.type === "download" ? "a" : Link}
                          href={link.href}
                          {...(link.type === "download" ? { download: true } : {})}
                          onClick={handleDropdownClose}
                          sx={{
                            color: "#261b7d",
                            fontWeight: 500,
                            "&:hover": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                          }}
                        >
                          {link.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ))}
                {/* Other Links */}
            {["/rkcl-network", "/gallery", "/blog", "/contact"].map((path, idx) => {
  const name =
    path === "/rkcl-network"
      ? "RKCL network"
      : path === "/gallery"
      ? "Gallery"
      : path === "/blog"
      ? "Blogs"
      : path === "/contact"
      ? "Contact Us"
      : "Unknown";
                  return (
                    <Button
                      key={idx}
                      component={Link}
                      href={path}
                      sx={{
                        color: isLinkActive(path) ? "#7a0706" : "#261b7d",
                        fontWeight: isLinkActive(path) ? 500 : 500,
                        borderBottom: isLinkActive(path)
                          ? "2px solid #7a0706"
                          : "2px solid transparent",
                        borderRadius: 0,
                        minWidth: "auto",
        
                        px: 1,
                        pb: 0.5,
                        "&:hover": { color: "#7a0706", backgroundColor: "transparent",fontWeight: 500, },
                      }}
                    >
                      {name}
                    </Button>
                  );
                })}
              </Box>
              {/* Mobile Menu Button */}
              <IconButton aria-label="responshiv nav" sx={{ display: { xs: "flex" } }} onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="max-w-[1920px] mx-auto">
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{ "& .MuiDrawer-paper": { width: 280, boxSizing: "border-box" } }}
        >
          <Box sx={{ width: 280, height: "100%", p: 3, display: "flex", flexDirection: "column", overflowY: "auto" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Link href="/">
                <Image src="/images/logo.png" alt="Company Logo" width={100} height={40} />
              </Link>
              <IconButton onClick={() => setMobileOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {/* Home */}
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  selected={isLinkActive("/")}
                  sx={{
                    borderRadius: 1,
                    color: isLinkActive("/") ? "#7a0706" : "#261b7d",
                    fontWeight: isLinkActive("/") ? 500 : 400,
                    borderBottom: isLinkActive("/") ? "2px solid #7a0706" : "2px solid transparent",
                    "&.Mui-selected": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              {/* Mobile Dropdowns */}
              {navdropdowns.map((dropdown, index) => (
                <Box key={index} sx={{ mb: 1 }}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      sx={{
                        borderRadius: 1,
                        justifyContent: "space-between",
                        color: isDropdownActive(dropdown.links) ? "#7a0706" : "#261b7d",
                        fontWeight: isDropdownActive(dropdown.links) ? 500 : 400,
                        borderBottom: isDropdownActive(dropdown.links)
                          ? "2px solid #7a0706"
                          : "2px solid transparent",
                        backgroundColor: isDropdownActive(dropdown.links) ? "rgba(220, 38, 38, 0.08)" : "transparent",
                      }}
                    >
                      <ListItemText primary={dropdown.title} />
                      {openAccordion === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  {openAccordion === index && (
                    <List component="div" disablePadding sx={{ pl: 2, flexDirection: "column", gap: 0.5, mt: 0.5 }}>
                      {dropdown.links.map((link, i) => (
                        <ListItem disablePadding key={i}>
                          <ListItemButton
                            component={link.type === "download" ? "a" : Link}
                            href={link.href}
                            {...(link.type === "download" ? { download: true } : {})}
                            onClick={() => setMobileOpen(false)}
                            sx={{
                              borderRadius: 1,
                              pl: 3,
                              color: "#261b7d",
                              fontWeight: 400,
                              borderBottom: "2px solid transparent",
                              "&:hover": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                            }}
                          >
                            <ListItemText primary={link.name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              ))}
              {/* Other Links */}
              {[ "/gallery", "/contact"].map((path, idx) => {
                const name = path === "/gallery"
                    ? "Gallery"
                    : "Contact Us";
                return (
                  <ListItem disablePadding sx={{ mb: 1 }} key={idx}>
                    <ListItemButton
                      component={Link}
                      href={path}
                      onClick={() => setMobileOpen(false)}
                      selected={isLinkActive(path)}
                      sx={{
                        borderRadius: 1,
                        color: isLinkActive(path) ? "#7a0706" : "#261b7d",
                        fontWeight: isLinkActive(path) ? 500 : 400,
                        borderBottom: isLinkActive(path) ? "2px solid #7a0706" : "2px solid transparent",
                        "&.Mui-selected": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                      }}
                    >
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </div>
    </>
  );
}
