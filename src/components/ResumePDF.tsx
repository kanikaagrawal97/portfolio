import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import {
  myDetails,
  workExperience,
  education,
  skills,
  webosmoticProjects,
} from "../constants/constants";

// Compact, professional multi-page layout with consistent sidebar
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    color: "#334155",
  },
  // Main Layout Grid
  container: {
    flexDirection: "row",
    gap: 0,
  },
  sidebar: {
    width: "30%",
    borderRightWidth: 1,
    borderRightColor: "#e2e8f0",
    paddingRight: 20,
  },
  mainContent: {
    width: "70%", // Increased slightly to fill space
    paddingLeft: 20,
  },
  // Header
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#6366f1",
    paddingBottom: 12,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
    letterSpacing: -0.5,
  },
  designation: {
    fontSize: 11,
    color: "#6366f1",
    marginTop: 8, // Increased from 4
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2.5,
  },
  // Sidebar Sections
  sidebarSection: {
    marginBottom: 16,
  },
  sidebarTitle: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#1e293b",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 3,
  },
  contactItem: {
    marginBottom: 5,
  },
  contactLabel: {
    fontSize: 7.5,
    fontWeight: "bold",
    color: "#64748b",
    textTransform: "uppercase",
  },
  contactValue: {
    fontSize: 8.5,
    color: "#334155",
  },
  contactLink: {
    fontSize: 8.5,
    color: "#2563eb",
    textDecoration: "underline",
  },
  skillGroup: {
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#4f46e5",
    marginBottom: 2,
    textTransform: "uppercase",
  },
  skillList: {
    fontSize: 8,
    color: "#475569",
    lineHeight: 1.4,
  },
  // Sidebar Education
  eduItem: {
    marginBottom: 8,
  },
  eduDegree: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 1,
  },
  eduInfo: {
    fontSize: 7.5,
    color: "#4f46e5",
    fontWeight: "bold",
  },
  eduDates: {
    fontSize: 7.5,
    color: "#94a3b8",
  },
  // Body Sections
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
    paddingBottom: 4,
  },
  summary: {
    fontSize: 9,
    color: "#475569",
    lineHeight: 1.5,
    textAlign: "justify",
  },
  experienceItem: {
    marginBottom: 12,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
  },
  role: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#0f172a",
  },
  duration: {
    fontSize: 8.5,
    color: "#6366f1",
    fontWeight: "bold",
  },
  company: {
    fontSize: 9.5,
    color: "#4f46e5",
    fontWeight: "bold",
    marginBottom: 4,
  },
  bulletPointContainer: {
    marginTop: 2,
  },
  bulletPoint: {
    flexDirection: "row",
    marginLeft: 3,
    marginBottom: 2,
  },
  bullet: {
    width: 8,
    fontSize: 9,
    color: "#6366f1",
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: "#475569",
    lineHeight: 1.4,
  },
  // Projects
  projectItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f8fafc",
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: "#6366f1",
  },
  projectTitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 8,
    color: "#0891b2",
    fontWeight: "bold",
    marginBottom: 4,
  },
  projectDesc: {
    fontSize: 8.5,
    color: "#475569",
    lineHeight: 1.3,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 8,
    color: "#94a3b8",
  },
});

const ResumePDF = () => {
  const featuredProjectTitles = [
    "Coables",
    "Recruitment Smart",
    "Baru",
    "Ramsell",
    "Soli",
    "HFHG",
    "Cultisan",
  ];
  const featuredProjects = webosmoticProjects
    .filter((p) => featuredProjectTitles.includes(p.title))
    .sort(
      (a, b) =>
        featuredProjectTitles.indexOf(a.title) -
        featuredProjectTitles.indexOf(b.title),
    );

  return (
    <Document title={`${myDetails.name} - Professional Resume`}>
      {/* PAGE 1: Identity, Sidebar, and Experience (including Neoyug) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{myDetails.name}</Text>
          <Text style={styles.designation}>{myDetails.title}</Text>
        </View>

        <View style={styles.container}>
          {/* SIDEBAR */}
          <View style={styles.sidebar}>
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Contact</Text>
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Phone</Text>
                <Text style={styles.contactValue}>{myDetails.phone}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Email</Text>
                <Link
                  src={`mailto:${myDetails.email}`}
                  style={{ textDecoration: "none" }}
                >
                  <Text style={styles.contactLink}>{myDetails.email}</Text>
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>LinkedIn</Text>
                <Link
                  src={myDetails.linkedinLink}
                  style={{ textDecoration: "none" }}
                >
                  <Text style={styles.contactLink}>kanikabhagat</Text>
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Portfolio</Text>
                <Link
                  src="https://kanikaagrawal97.github.io/portfolio"
                  style={{ textDecoration: "none" }}
                >
                  <Text style={styles.contactLink}>
                    kanikaagrawal97.github.io/portfolio
                  </Text>
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Location</Text>
                <Text style={styles.contactValue}>Surat, India</Text>
              </View>
            </View>

            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Expertise</Text>
              {Object.entries(skills.technical)
                .slice(0, 6)
                .map(([category, items]) => (
                  <View key={category} style={styles.skillGroup}>
                    <Text style={styles.skillCategoryTitle}>{category}</Text>
                    <Text style={styles.skillList}>{items.join(", ")}</Text>
                  </View>
                ))}
            </View>

            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Education</Text>
              {education.map((edu, index) => (
                <View key={index} style={styles.eduItem}>
                  <Text style={styles.eduDegree}>{edu.degree}</Text>
                  <Text style={styles.eduInfo}>{edu.institution}</Text>
                  <Text style={styles.eduDates}>{edu.duration}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* MAIN CONTENT Area */}
          <View style={styles.mainContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Summary</Text>
              <Text style={styles.summary}>{myDetails.summary.join(" ")}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              {/* Included full work experience to include Neoyug Tech */}
              {workExperience.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <View style={styles.expHeader}>
                    <Text style={styles.role}>{exp.role}</Text>
                    <Text style={styles.duration}>
                      {exp.start} — {exp.end}
                    </Text>
                  </View>
                  <Text style={styles.company}>{exp.company}</Text>
                  <View style={styles.bulletPointContainer}>
                    {exp.responsibilities.slice(0, 3).map((resp, i) => (
                      <View key={i} style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>{resp}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <Text style={styles.footer}>{myDetails.name} • 1</Text>
      </Page>

      {/* PAGE 2: Projects (Maintained Sidebar layout for consistency) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Empty/Secondary Sidebar for spacing consistency */}
          <View style={styles.sidebar}>
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>More Skills</Text>
              {Object.entries(skills.technical)
                .slice(6)
                .map(([category, items]) => (
                  <View key={category} style={styles.skillGroup}>
                    <Text style={styles.skillCategoryTitle}>{category}</Text>
                    <Text style={styles.skillList}>{items.join(", ")}</Text>
                  </View>
                ))}
            </View>
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Soft Skills</Text>
              <Text style={styles.skillList}>{skills.soft.join(" • ")}</Text>
            </View>
          </View>

          {/* MAIN CONTENT: Projects are now in the right column only */}
          <View style={styles.mainContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Key Projects Highlight</Text>
              {featuredProjects.map((project, index) => (
                <View key={index} style={styles.projectItem}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectTech}>
                    {project.technologies.slice(0, 5).join(" • ")}
                  </Text>
                  <Text style={styles.projectDesc}>{project.description}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <Text style={styles.footer}>{myDetails.name} • 2</Text>
      </Page>
    </Document>
  );
};

export default ResumePDF;
