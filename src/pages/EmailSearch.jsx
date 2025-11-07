import React, { useState } from "react";
import {
  FaUserCircle, FaSearch, FaGlobe, FaDatabase, FaLink, FaBell, FaCog,
  FaBookOpen, FaPlayCircle, FaChevronLeft, FaChevronRight, FaUpload, FaSignOutAlt
} from "react-icons/fa";

const COLORS = {
  bgLight: "#f8fbf9",
  accent: "#06c8b5",
  accentDark: "#0bac95",
  sidebarSelect: "#dff6f2",
  border: "#06c8b5",
  boxBorder: "#e0e3e4",
  greenBg: "#e9fbe9",
  greenBorder: "#bcf5bc",
  blueFileBg: "#e6f4fa",
  red: "#e74c3c"
};

const EmailSearch = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [domain, setDomain] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [emailResult, setEmailResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleEmailSearch = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (firstName && lastName && domain) {
      // If all fields are filled, file selection is mandatory
      if (!selectedFile) {
        alert("Please select a file when entering first name, last name, and domain");
        return;
      }
    } else if (!firstName || !lastName || !domain) {
      // If any field is missing, show the original error
      alert("Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setEmailResult(`${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`);
      setIsLoading(false);
    }, 1200);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSignOut = () => {
    alert("Signed out!");
  };

  return (
    <div className="w-screen h-screen flex" style={{
      backgroundColor: COLORS.bgLight,
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? 260 : 75,
          height: "100%",
          background: "#fff",
          borderRight: `2.5px solid ${COLORS.accent}`,
          transition: "width 0.2s",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div>
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
          <div className="p-8 pb-4 flex items-center justify-start" style={{ paddingLeft: sidebarOpen ? 28 : 8 }}>
            <span style={{ fontWeight: 800, fontSize: 34 }}>
              <span style={{ color: "#ff731d" }}>{sidebarOpen ? "UPTO" : "U"}</span>
              <span style={{ color: COLORS.accent }}>{sidebarOpen ? "SKILLS" : "S"}</span>
            </span>
          </div>
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
        
        {/* Account Section at the bottom */}
        <div style={{ 
          marginTop: "auto", 
          borderTop: `1px solid ${COLORS.sidebarSelect}`,
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div className="flex flex-col items-center px-7 w-full">
            <div className="flex items-center space-x-3 w-full">
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
            
            {/* Sign Out Button */}
            {sidebarOpen && (
              <button
                onClick={handleSignOut}
                className="mt-4 flex items-center gap-2 text-sm font-medium w-full justify-center py-2 rounded-lg hover:opacity-90 transition-opacity"
                style={{
                  color: "#fff",
                  backgroundColor: COLORS.red,
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                <FaSignOutAlt />
                Sign Out
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main area */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto"
        style={{
          background: COLORS.bgLight,
          padding: "0px",
          margin: 0,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "flex-start"
        }}>
        {/* Notification + Settings */}
        <div style={{
          width: "100%",
          minHeight: 90,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 22,
          boxSizing: "border-box",
          padding: "16px 44px 16px 0",
          position: "sticky",
          top: 0,
          zIndex: 10
        }}>
          <button style={{
            background: "none",
            border: "none",
            outline: "none",
            cursor: "pointer",
            marginRight: 8
          }}>
            <FaBell color={COLORS.accentDark} size={28} />
          </button>
          <button style={{
            background: "none",
            border: "none",
            outline: "none",
            cursor: "pointer"
          }}>
            <FaCog color={COLORS.accentDark} size={28} />
          </button>
        </div>

        {/* Info Banner */}
        <div style={{
          width: "99%",
          margin: "0 auto 44px auto",
          background: COLORS.accent,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 56px",
          color: "#fff",
          fontWeight: 700,
          fontSize: 32,
          boxSizing: "border-box",
          minHeight: 110
        }}>
          <span>Learn how to collect targeted leads from any domain</span>
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

        {/* Email Search */}
        <div style={{
          width: "99%",
          margin: "0 auto 48px auto",
          borderRadius: 18,
          border: `3px solid ${COLORS.accent}`,
          boxSizing: "border-box",
          background: "#fff",
          padding: "48px 44px"
        }}>
          <h2 style={{ color: COLORS.accentDark, fontSize: 28, marginBottom: 20, fontWeight: 900 }}>
            Email Search
          </h2>
          <p style={{ fontSize: 19, marginBottom: 22 }}>
            Find email from your leads name and company
          </p>
          <form onSubmit={handleEmailSearch}>
            <div style={{ display: "flex", gap: 30, marginBottom: 34 }}>
              <input style={{ flex: 1, padding: "20px", fontSize: 20, borderRadius: 13, border: '2px solid #e0e3e4' }} placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <input style={{ flex: 1, padding: "20px", fontSize: 20, borderRadius: 13, border: '2px solid #e0e3e4' }} placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <input style={{ flex: 1, padding: "20px", fontSize: 20, borderRadius: 13, border: '2px solid #e0e3e4' }} placeholder="Company Domain Name"
                value={domain}
                onChange={e => setDomain(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" style={{
                background: COLORS.sidebarSelect,
                color: COLORS.accent,
                border: "none",
                fontWeight: 700,
                fontSize: 23,
                borderRadius: 16,
                padding: "18px 54px",
                marginTop: 10,
                cursor: "pointer"
              }}>
                {isLoading ? "Searching..." : "Find Email"}
              </button>
            </div>
            {emailResult && (
              <div className="mt-8 p-5 rounded-lg text-center"
                style={{
                  backgroundColor: COLORS.greenBg,
                  border: `2px solid ${COLORS.greenBorder}`,
                  fontSize: 22,
                  marginTop: "30px",
                  fontWeight: "bold"
                }}>
                <p style={{ color: COLORS.accentDark }}>
                  Found email: <span style={{ fontWeight: 800 }}>{emailResult}</span>
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Bulk Email Search */}
        <div style={{
          width: "99%",
          margin: "0 auto 60px auto",
          borderRadius: 18,
          border: `3px solid ${COLORS.accent}`,
          boxSizing: "border-box",
          background: "#fff",
          padding: "48px 44px"
        }}>
          <h2 style={{ color: COLORS.accentDark, fontSize: 28, marginBottom: 20, fontWeight: 900 }}>
            Bulk Email Search
          </h2>
          <p style={{ fontSize: 19, marginBottom: 220 }}>
            Collect emails in bulk from a list of lead names and company domains
          </p>
          <div style={{
            border: "2px solid #e0e3e4",
            borderRadius: 14,
            background: COLORS.sidebarSelect,
            padding: "40px 0",
            textAlign: "center"
          }}>
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-full font-bold focus-within:outline-none shadow hover:bg-[#e0f8f3] transition-all"
              style={{
                color: COLORS.accent,
                borderColor: COLORS.border,
                fontSize: 21,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 14,
                padding: '14px 44px',
                border: `2.5px solid ${COLORS.border}`,
                boxShadow: '0 2px 8px 0 rgba(6,200,181,0.11)',
                fontWeight: 700,
                marginBottom: 16
              }}
            >
              <FaUpload style={{ color: COLORS.accentDark, fontSize: 28 }} />
              <span>Choose File</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
            <span style={{ fontSize: 20, color: "#666", marginLeft: 12 }}>or drag and drop</span>
            <p style={{ marginTop: 22, fontSize: 19, color: COLORS.accentDark }}>
              Process up to 50,000 domain searches at once with our Bulk Email Search feature.
            </p>
            {selectedFile && (
              <div style={{
                backgroundColor: COLORS.blueFileBg,
                border: '2px solid #e0e3e4',
                borderRadius: "13px",
                padding: "16px",
                marginTop: 20,
                fontSize: 19,
                color: COLORS.accentDark,
                fontWeight: 700,
                display: "inline-block"
              }}>
                Selected file: <span style={{ fontWeight: "bold" }}>{selectedFile.name}</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailSearch;