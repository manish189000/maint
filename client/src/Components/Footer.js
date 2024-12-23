import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#3F51B5',
        color: 'white',
        padding: '2rem 0',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Top Section: Logo and Navigation */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <div
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
            }}
          >
            MyWebsite
          </div>
          <p style={{ fontSize: '1rem', textAlign: 'center' }}>
            Your tagline or description goes here.
          </p>
        </div>

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#home"
            style={{
              fontSize: '1.1rem',
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            Home
          </a>
          <a
            href="#about"
            style={{
              fontSize: '1.1rem',
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            About
          </a>
          <a
            href="#services"
            style={{
              fontSize: '1.1rem',
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            Services
          </a>
          <a
            href="#contact"
            style={{
              fontSize: '1.1rem',
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.5rem',
              color: 'white',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.5rem',
              color: 'white',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.5rem',
              color: 'white',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.5rem',
              color: 'white',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ffeb3b')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1rem' }}>
            &copy; 2024 MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
