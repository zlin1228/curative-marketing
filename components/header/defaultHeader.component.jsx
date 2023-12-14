import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Collapse, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { FiChevronDown, FiGlobe } from 'react-icons/fi';

import Button from 'components/button/button.component';
import DropdownContent from 'components/header/dropdownContent';
import { HeaderStyles, HeaderSubNav } from 'components/header/header.styles';
import { LOCALE_DATA, getLogo, handleLocale, setListeners } from 'components/header/header.utils';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

import { generateProps } from 'utils/componentGenerator';
import { HEADER_ID } from 'utils/constants';

const DefaultHeader = ({ component }) => {
  const { asPath, locale } = useRouter();
  const { menu, buttons, submenu, curative } = component;
  const [stickyState, setStickyState] = useState(false);
  const [isLocale, setLocale] = useState(LOCALE_DATA[locale] || 'English');
  const [open, setOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [[menuIndex, direction], setMenuIndex] = useState([-1, 0]);

  const dropdownRef = useRef();

  const SCROLL_THRESHOLD = 50;

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const determineLogo = useMemo(() => getLogo(stickyState, curative, windowSize), [stickyState, curative, windowSize]);

  const submenuList = useMemo(
    () =>
      menu &&
      menu.map((item, index) => {
        const length = item.fields.menu && item.fields.menu.length;
        if (length > 0) {
          return (
            <div className="dropdown-content mx-auto" data-index={index}>
              <DropdownContent item={item} nowrap />
            </div>
          );
        }

        return null;
      }),
    [menu],
  );

  const handleMenu = (e, index) => {
    if (index !== -1) {
      setMenuIndex([index, menuIndex !== -1 ? index - menuIndex : 0]);
    } else if (e.clientY < SCROLL_THRESHOLD) {
      setMenuIndex([-1, 0]);
    }
  };

  const handleMouseInSubmenu = flag => {
    if (!flag) {
      setMenuIndex([-1, 0]);
    }
  };

  useEffect(() => {
    if (menuIndex !== -1) {
      const dom = document.querySelector(`.submenu-wrapper .dropdown-content[data-index='${menuIndex}']`);
      const container = document.querySelector('.submenu-container');
      const arrow = document.querySelector('.site-header-arrow');
      if (dom) {
        document.querySelector('.submenu-wrapper').classList.remove('hidden-menu');
        document.querySelector('.submenu-wrapper').style.height = `${dom.clientHeight}px`;
        const menuList = document.querySelectorAll('.menu-item');
        const metric = menuList[menuIndex].getBoundingClientRect();

        const offsetWidth = metric.x + metric.width / 2;
        const containerLeft = Math.max(Math.min(200, offsetWidth), offsetWidth - dom.clientWidth / 2);
        const arrowLeft = offsetWidth - containerLeft;
        container.style.left = `${containerLeft}px`;
        arrow.style.left = `${arrowLeft}px`;

        const menuTimeout = setTimeout(() => {
          if (
            !(
              document.querySelector('.submenu-wrapper').matches(':hover') ||
              document.querySelector('.active-menu').matches(':hover')
            )
          ) {
            handleMouseInSubmenu(false);
          }
        }, 3000);

        return () => clearTimeout(menuTimeout);
      }
    } else {
      document.querySelector('.submenu-wrapper').classList.add('hidden-menu');
    }
  }, [menuIndex]);

  useEffect(() => setListeners(window, setStickyState, setWindowSize), []);

  const dynamicRoute = useRouter().asPath;
  useEffect(() => {
    if (document.querySelector('.header-container').classList.contains('expanded')) {
      document.querySelector('.navbar-toggler').click();
      setExpanded(false);
      setOpen(false);
    }
  }, [dynamicRoute]);

  return (
    <HeaderStyles id={HEADER_ID} className="navigation-header" sticky={stickyState}>
      <Navbar expand="xl" onToggle={e => setExpanded(e)}>
        <Container className={`header-container ${isExpanded ? 'expanded' : ''}`}>
          <div className={`brand-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <Navbar.Brand>
              <ComponentLink href="/" target="_self" rel="noreferrer">
                {determineLogo && (
                  <ComponentImage
                    className="company-logo"
                    src={`https:${determineLogo?.logo}`}
                    alt="Curative Logo"
                    width={125}
                    height={25}
                  />
                )}
              </ComponentLink>
            </Navbar.Brand>
            <div className="d-flex align-items-center mobile-top-tool">
              <div className="barbtn">
                {buttons &&
                  buttons.map(
                    (button, idx) => idx === 0 && <Button component={button?.fields} key={button?.sys?.id} />,
                  )}
              </div>
              <Dropdown>
                <Dropdown.Toggle>
                  <FiGlobe />
                  <FiChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {Object.entries(LOCALE_DATA).map(([key, text]) => (
                    <Dropdown.Item key={key} onClick={() => handleLocale(text, setLocale, document)}>
                      <ComponentLink href={asPath} locale={key} className={locale === key ? 'active' : ''}>
                        {text}
                      </ComponentLink>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <div className="nav-icon">
                  <span />
                  <span />
                  <span />
                </div>
              </Navbar.Toggle>
            </div>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between mobile-menu">
            <Nav ref={dropdownRef}>
              {menu &&
                menu.map((item, index) => {
                  if (item.fields.menu) {
                    return (
                      <Nav.Item
                        className={`my-auto menu-item drop-item ${menuIndex === index ? 'active-menu' : ''}`}
                        key={item.fields.internalName}
                        aria-controls={`dropdown-content-${index}`}
                        aria-expanded={open === String(index)}
                      >
                        <ComponentLink
                          href={item?.fields?.link || '#!'}
                          className={`nav-header d-none d-xl-inline ${open === String(index) && 'header-active'} ${
                            menuIndex === index ? 'hover-active' : ''
                          }`}
                          onMouseEnter={e => handleMenu(e, index)}
                          onMouseLeave={e => handleMenu(e, -1)}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="nav-header-item">{item.fields.label}</span>
                          <FiChevronDown className="arrow-icon" />
                        </ComponentLink>
                        <div
                          className={`nav-header d-flex d-xl-none ${open === String(index) && 'header-active'} ${
                            menuIndex === index ? 'hover-active' : ''
                          }`}
                        >
                          <ComponentLink href={item?.fields?.link || '#!'} width="100%">
                            <span className="nav-header-item">{item.fields.label}</span>
                          </ComponentLink>
                          <FiChevronDown
                            className="arrow-icon"
                            role="button"
                            tabIndex={0}
                            onClick={() => (open === String(index) ? setOpen(false) : setOpen(String(index)))}
                          />
                        </div>
                        <Collapse in={open === String(index)}>
                          <div id={`dropdown-content-${index}`} className="dropdown-content mx-auto d-xl-none">
                            <DropdownContent item={item} />
                          </div>
                        </Collapse>
                      </Nav.Item>
                    );
                  }

                  return (
                    <Nav.Item key={item.fields.internalName} className="my-auto menu-item drop-item no-dropdown">
                      <ComponentLink href={item.fields.link || '#!'} className="nav-header-item">
                        {item.fields.label}
                      </ComponentLink>
                    </Nav.Item>
                  );
                })}
            </Nav>
            {submenu && (
              <div className="d-block d-xl-none">
                {submenu.map(menuLink => (
                  <Nav.Item key={menuLink.fields.internalName} className="my-auto menu-item drop-item no-dropdown">
                    <ComponentLink href={menuLink?.fields?.link || '#!'}>{menuLink?.fields?.label}</ComponentLink>
                  </Nav.Item>
                ))}
              </div>
            )}
          </Navbar.Collapse>
          <div
            className="submenu-container d-none d-xl-block"
            onMouseEnter={() => handleMouseInSubmenu(true)}
            onMouseLeave={() => handleMouseInSubmenu(false)}
          >
            <div className={`site-header-arrow d-none d-xl-block ${menuIndex === -1 && 'arrow-hidden'}`} />
            <div className="submenu-wrapper d-none d-xl-block">{submenuList[menuIndex]}</div>
          </div>
          <Nav className="button-nav justify-self-end d-none d-xl-flex">
            {buttons &&
              buttons.map(button => {
                button.fields.color = stickyState ? 'primary-blue' : 'tertiary-white';
                button.fields.style = 'solid';
                const props = generateProps(button);

                return <Button key={props._id} {...props} />;
              })}
          </Nav>
          <Nav className="justify-self-end d-none d-xl-flex">
            <Dropdown>
              <Dropdown.Toggle>
                <FiGlobe />
                <span className="locale-title">{isLocale}</span>
                <FiChevronDown />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.entries(LOCALE_DATA).map(([key, text]) => (
                  <Dropdown.Item key={key} onClick={() => handleLocale(text, setLocale, document)}>
                    <ComponentLink href={asPath} locale={key} className={locale === key ? 'active' : ''}>
                      {text}
                    </ComponentLink>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      {submenu && submenu.length > 0 && (
        <HeaderSubNav sticky={stickyState} className="d-none d-xl-flex">
          <Container className="px-0">
            <div className="links-group">
              {submenu.map(menuLink => (
                <ComponentLink href={menuLink?.fields?.link || '#!'} key={menuLink?.fields?.internalName}>
                  {menuLink?.fields?.label}
                </ComponentLink>
              ))}
            </div>
          </Container>
        </HeaderSubNav>
      )}
    </HeaderStyles>
  );
};

export default DefaultHeader;
