// ============================================================
// EDIT YOUR PORTFOLIO INFO HERE
// ============================================================

export const portfolio = {
  name: "Your Name",
  role: "IT Support & Computer Systems Servicing Specialist",
  subheadline:
    "Currently training in hardware assembly, network configuration, and system server deployment.",
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/your-handle",
  location: "Available for on-site & remote support",

  skills: {
    Hardware: [
      "PC Assembly",
      "Hardware Diagnostics",
      "Preventive Maintenance",
    ],
    Networking: [
      "LAN/WAN Setup",
      "Router Configuration",
      "Ethernet Cable Splicing (Crimping)",
    ],
    "Software / OS": [
      "Windows & Linux Installation",
      "Driver Deployment",
      "Server Configuration",
    ],
  },

  experience: [
    {
      tag: "01",
      title: "System Installation & Configuration",
      description:
        "Setting up clean OS builds, deploying drivers, and resolving boot or compatibility issues across Windows and Linux environments.",
      stack: ["Windows", "Linux", "Drivers"],
    },
    {
      tag: "02",
      title: "Local Network Deployment",
      description:
        "Building Ethernet cables (T568B), configuring SOHO routers, segmenting subnets, and verifying connectivity across workplace LANs.",
      stack: ["LAN/WAN", "Crimping", "Routers"],
    },
    {
      tag: "03",
      title: "Server Setup",
      description:
        "Provisioning basic server infrastructure, configuring user roles, managing permissions, and documenting access policies.",
      stack: ["Server", "User Mgmt", "Access Ctrl"],
    },
  ],
};
