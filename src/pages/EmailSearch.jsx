import React, { useState } from 'react';
import {
  FaUserCircle, FaSearch, FaGlobe, FaDatabase, FaLink, FaBell, FaCog,
  FaBookOpen, FaPlayCircle, FaChevronLeft, FaChevronRight, FaUpload
} from 'react-icons/fa';

const EmailSearch = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [domain, setDomain] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [emailResult, setEmailResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const COLORS = {
    bgLight: "#f8fbf9",
    accent: "#06c8b5",
    accentDark: "#0bac95",
    sidebarSelect: "#dff6f2",
    border: "#06c8b5",
    boxBorder: "#e0e3e4",
    greenBg: "#e9fbe9",
    greenBorder: "#bcf5bc",
    blueFileBg: "#e6f4fa"
  };

  // Handlers
  const handleEmailSearch = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !domain) {
      alert('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const resultEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
      setEmailResult(resultEmail);
      setIsLoading(false);
    }, 1500);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleBulkSearch = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      alert(`Bulk email search completed for file: ${selectedFile.name}`);
      setIsLoading(false);
    }, 2000);
  };

  const handleSignOut = () => {
    alert("Signed out!");
  };

  return (
    <div className="w-screen h-screen flex" style={{
      backgroundColor: COLORS.bgLight,
      minHeight: '100vh',
      minWidth: '100vw'
    }}>
      {/* Sidebar */}
      <aside
        className="flex flex-col justify-between h-full bg-white border-r transition-all duration-300"
        style={{
          borderColor: COLORS.accent,
          minHeight: '100vh',
          width: sidebarOpen ? 260 : 72,
          backgroundColor: "#fff",
          borderRight: `2.5px solid ${COLORS.accent}`,
          transition: "width 0.2s"
        }}
      >
        <div>
          {/* Collapse Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              title={sidebarOpen ? "Collapse" : "Expand"}
              style={{
                color: COLORS.accentDark,
                backgroundColor: "#fff",
                border: `1px solid ${COLORS.boxBorder}`
              }}
            >
              {sidebarOpen ? <FaChevronLeft size={19} /> : <FaChevronRight size={20} />}
            </button>
          </div>
          {/* Logo */}
          <div className="p-8 pb-4 flex items-center justify-start" style={{ paddingLeft: sidebarOpen ? 28 : 8 }}>
            <span style={{ fontWeight: 800, fontSize: 34 }}>
              <span style={{ color: "#ff731d" }}>{sidebarOpen ? "UPTO" : "U"}</span>
              <span style={{ color: COLORS.accent }}>{sidebarOpen ? "SKILLS" : "S"}</span>
            </span>
          </div>
          {/* Menu */}
          <nav>
            <ul className="space-y-2">
              <li>
                <button className="w-full px-8 py-4 flex items-center gap-4 text-left font-semibold rounded-r-full"
                  style={{
                    backgroundColor: COLORS.sidebarSelect,
                    color: COLORS.accentDark,
                    fontSize: 19,
                    justifyContent: sidebarOpen ? "flex-start" : "center"
                  }}>
                  <FaSearch size={23} style={{ color: COLORS.accent }} />
                  {sidebarOpen && "Email Search"}
                </button>
              </li>
              <li>
                <button className="w-full px-8 py-4 flex items-center gap-4 text-left hover:bg-gray-50 rounded-r-full"
                  style={{ color: COLORS.accentDark, backgroundColor: "#fff", fontSize: 19, justifyContent: sidebarOpen ? "flex-start" : "center" }}>
                  <FaGlobe size={23} style={{ color: COLORS.accentDark }} />
                  {sidebarOpen && "Domain Search"}
                </button>
              </li>
              <li>
                <button className="w-full px-8 py-4 flex items-center gap-4 text-left hover:bg-gray-50 rounded-r-full"
                  style={{ color: COLORS.accentDark, backgroundColor: "#fff", fontSize: 19, justifyContent: sidebarOpen ? "flex-start" : "center" }}>
                  <FaDatabase size={23} style={{ color: COLORS.accentDark }} />
                  {sidebarOpen && "Database Search"}
                </button>
              </li>
              <li>
                <button className="w-full px-8 py-4 flex items-center gap-4 text-left hover:bg-gray-50 rounded-r-full"
                  style={{ color: COLORS.accentDark, backgroundColor: "#fff", fontSize: 19, justifyContent: sidebarOpen ? "flex-start" : "center" }}>
                  <FaLink size={23} style={{ color: COLORS.accentDark }} />
                  {sidebarOpen && "Social URL Search"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* User Account Section */}
        <div className="p-8 flex flex-col items-center space-y-3 border-t"
          style={{ borderColor: COLORS.sidebarSelect, backgroundColor: "#fff", alignItems: sidebarOpen ? 'center' : 'stretch' }}>
          <div className="flex items-center space-x-3">
            <FaUserCircle size={38} style={{ color: COLORS.accent }} />
            {sidebarOpen && (
              <div>
                <div className="font-bold" style={{ color: COLORS.accentDark, fontSize: 16 }}>
                  Eliza Chris
                </div>
                <div className="text-sm" style={{ color: COLORS.accent }}>
                  elizachris@gmail.com
                </div>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <button
              onClick={handleSignOut}
              className="mt-4 px-6 py-2 text-white rounded-lg font-semibold"
              style={{
                backgroundColor: COLORS.accentDark,
                fontSize: 15,
                border: "none",
                marginTop: "14px"
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      </aside>

      {/* Main Area - Only Left Border visible (attached to sidebar) */}
      <main className="flex-1 flex flex-col h-full"
        style={{
          minHeight: '100vh',
          background: COLORS.bgLight,
          padding: 0,
          margin: 0,
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            margin: 0,
            borderLeft: `3px solid ${COLORS.accent}`,
            borderTop: 'none',
            borderBottom: 'none',
            borderRight: 'none',
            borderRadius: '0',
            background: "#fff",
            width: '100%',
            maxWidth: '1350px',
            minHeight: 'calc(100vh - 0px)',
            padding: "0 0 48px 0",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          {/* Top Notification/Settings */}
          <div style={{
            width: "100%",
            position: "relative",
            minHeight: 84,
            marginBottom: 14,
            background: "#fff"
          }}>
            <div style={{
              position: "absolute",
              right: 40,
              top: 30,
              background: "#fff",
              borderRadius: 22,
              border: "2px solid #e0e3e4",
              padding: "14px 36px 14px 24px",
              display: "flex",
              alignItems: "center",
              gap: 24,
              zIndex: 20,
              boxShadow: "0 2px 18px 0 rgba(0,0,0,0.10)"
            }}>
              <button style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }} title="Notifications">
                <FaBell color={COLORS.accentDark} size={26} />
              </button>
              <button style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }} title="Settings">
                <FaCog color={COLORS.accentDark} size={26} />
              </button>
            </div>
          </div>
          {/* Info Bar */}
          <div
            style={{
              width: "99%",
              maxWidth: 1280,
              height: 110,
              margin: "0 auto 44px auto",
              background: COLORS.accent,
              borderRadius: 21,
              border: `3px solid ${COLORS.boxBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 52px",
              color: "#fff",
              fontWeight: 700,
              fontSize: 30
            }}
          >
            <span style={{ fontSize: 28, fontWeight: 700 }}>
              Learn how to collect targeted leads from any domain
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
              <button style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#fff",
                color: COLORS.accent,
                border: "none",
                fontWeight: 700,
                padding: "13px 28px",
                borderRadius: 36,
                fontSize: 22,
                cursor: "pointer"
              }}>
                <FaPlayCircle style={{ color: COLORS.accent, fontSize: 28 }} />
                Watch tutorial
              </button>
              <button style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#fff",
                color: COLORS.accent,
                border: "none",
                fontWeight: 700,
                padding: "13px 28px",
                borderRadius: 36,
                fontSize: 22,
                cursor: "pointer"
              }}>
                <FaBookOpen style={{ color: COLORS.accent, fontSize: 28 }} />
                Read Guide
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 overflow-auto" style={{ minHeight: 0, background: "#fff" }}>
            {/* Email Search Box */}
            <div
              className="bg-white rounded-xl shadow p-11 w-full mb-12"
              style={{
                border: `3px solid ${COLORS.accent}`,
                minWidth: 650,
                maxWidth: 1200,
                width: "98%",
                boxSizing: "border-box",
                fontSize: 22,
                marginBottom: "50px"
              }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.accentDark, fontSize: 27 }}>
                Email Search
              </h2>
              <p className="mb-6 text-xl text-gray-700" style={{ fontSize: 20 }}>
                Find email from your leads name and company
              </p>
              <form onSubmit={handleEmailSearch}>
                <div className="flex flex-row gap-10 justify-center mb-9" style={{ marginTop: "40px" }}>
                  <div className="flex-1 flex flex-col max-w-md">
                    <label htmlFor="firstName" className="block text-lg font-semibold mb-2" style={{ color: COLORS.accentDark }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-6 py-3 border rounded-lg text-lg"
                      style={{
                        border: `2px solid #e0e3e4`,
                        backgroundColor: "#fff",
                        color: COLORS.accentDark
                      }}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="flex-1 flex flex-col max-w-md">
                    <label htmlFor="lastName" className="block text-lg font-semibold mb-2" style={{ color: COLORS.accentDark }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-6 py-3 border rounded-lg text-lg"
                      style={{
                        border: `2px solid #e0e3e4`,
                        backgroundColor: "#fff",
                        color: COLORS.accentDark
                      }}
                      placeholder="Enter last name"
                    />
                  </div>
                  <div className="flex-1 flex flex-col max-w-md">
                    <label htmlFor="domain" className="block text-lg font-semibold mb-2" style={{ color: COLORS.accentDark }}>
                      Company Domain Name
                    </label>
                    <input
                      type="text"
                      id="domain"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full px-6 py-3 border rounded-lg text-lg"
                      style={{
                        border: `2px solid #e0e3e4`,
                        backgroundColor: "#fff",
                        color: COLORS.accentDark
                      }}
                      placeholder="example.com"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-10 py-4 font-bold rounded-lg"
                    style={{
                      backgroundColor: COLORS.sidebarSelect,
                      color: COLORS.accent,
                      border: "none",
                      fontSize: 21,
                      minWidth: 210
                    }}
                  >
                    {isLoading ? 'Searching...' : 'Find Email'}
                  </button>
                </div>
                {emailResult && (
                  <div className="mt-8 p-5 rounded-lg text-center"
                    style={{
                      backgroundColor: COLORS.greenBg,
                      border: `2px solid ${COLORS.greenBorder}`,
                      fontSize: 22
                    }}>
                    <p style={{ color: COLORS.accentDark }}>
                      Found email: <span className="font-bold">{emailResult}</span>
                    </p>
                  </div>
                )}
              </form>
            </div>
            {/* Bulk Email Search Box */}
            <div
              className="bg-white rounded-xl shadow p-11 w-full"
              style={{
                border: `3px solid ${COLORS.accent}`,
                minWidth: 600,
                maxWidth: 1200,
                width: "98%",
                boxSizing: "border-box",
                fontSize: 21
              }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.accentDark, fontSize: 27 }}>
                Bulk Email Search
              </h2>
              <p className="mb-6 text-xl text-gray-700" style={{ fontSize: 20 }}>
                Collect emails in bulk from a list of lead names and company domains
              </p>
              <form onSubmit={handleBulkSearch}>
                <div className="border rounded-xl p-10 text-center"
                  style={{
                    border: "2px solid #e0e3e4",
                    backgroundColor: COLORS.sidebarSelect,
                    marginTop: "34px"
                  }}>
                  <div className="space-y-5">
                    <svg className="mx-auto h-16 w-16" style={{ color: COLORS.accentDark }}
                      stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* -- Modern Choose File button -- */}
                    <div className="flex text-lg justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-full font-bold focus-within:outline-none shadow hover:bg-[#e0f8f3] transition-all"
                        style={{
                          color: COLORS.accent,
                          borderColor: COLORS.border,
                          fontSize: 19,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          padding: '13px 36px',
                          border: `2.5px solid ${COLORS.border}`,
                          boxShadow: '0 2px 8px 0 rgba(6,200,181,0.11)',
                          fontWeight: 700
                        }}
                      >
                        <FaUpload style={{ color: COLORS.accentDark, fontSize: 24 }} />
                        <span>Choose File</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-5 py-3 text-gray-500" style={{ fontSize: 18 }}>
                        or drag and drop
                      </p>
                    </div>
                    <p className="text-lg" style={{ color: COLORS.accentDark, fontSize: 19 }}>
                      Process up to 50,000 domain searches at once with our Bulk Email Search feature.
                    </p>
                  </div>
                  {selectedFile && (
                    <div className="mt-8 p-5 rounded-lg"
                      style={{
                        backgroundColor: COLORS.blueFileBg,
                        border: '2px solid #e0e3e4',
                        fontSize: 19
                      }}>
                      <p className="text-lg" style={{ color: COLORS.accentDark }}>
                        Selected file: <span className="font-bold">{selectedFile.name}</span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex justify-center" style={{ marginTop: "32px" }}>
                  <button
                    type="submit"
                    disabled={isLoading || !selectedFile}
                    className="px-10 py-4 font-bold rounded-lg"
                    style={{
                      backgroundColor: COLORS.sidebarSelect,
                      color: COLORS.accent,
                      border: "none",
                      fontSize: 21,
                      minWidth: 220
                    }}
                  >
                    {isLoading ? 'Processing...' : 'Process Bulk Search'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailSearch;
