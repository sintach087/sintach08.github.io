import driftfiletransfer from 'assets/images/projects/web/driftfiletransfer.webp';
import engineeringpurgingtool from 'assets/images/projects/web/engineeringpurgingtool.webp';
import hardwareinventoryweb from 'assets/images/projects/web/hardwareinventoryweb.webp';
import igftinventory from 'assets/images/projects/web/igftinventory.webp';
import licenseddeniedreport from 'assets/images/projects/web/licenseddeniedreport.webp';
import nonstdfcollection from 'assets/images/projects/web/nonstdfcollection.webp';
import supplementalfileupload from 'assets/images/projects/web/supplementalfileupload.webp';
import testersoftwareversion from 'assets/images/projects/web/testersoftwareversion.webp';
import testlotsummary from 'assets/images/projects/web/testlotsummary.webp';
import uphmonitoring from 'assets/images/projects/web/uphmonitoring.webp';
import alertdashboard from 'assets/images/projects/web/alertdashboard.webp';
import dataviewer from 'assets/images/projects/desktop/dataviewer.webp';
import hardwareinventorydesktop from 'assets/images/projects/desktop/hardwareinventorydesktop.webp';
import mvtsdl2sum from 'assets/images/projects/desktop/mvtsdl2sum.webp';
import spinktools from 'assets/images/projects/desktop/spinktools.webp';
import pdfexensio from 'assets/images/projects/scripts/pdfexensio.webp';
import scripting from 'assets/images/projects/scripts/scripting.webp';
import xymonmonitoring from 'assets/images/projects/scripts/xymonmonitoring.webp';

export const WebDev = [
    {
        projectname: 'TEST Information Systems Hardware Inventory',
        details: 'A system on the management of spares, tracking of withdrawn items, generate barcode for new items, and generate reports and graphs for administration purposes.',
        tools: 'HTML, SCSS, React.js, C# ASP.NET, MYSQL, ChartJS',
        img: hardwareinventoryweb
    },
    {
        projectname: 'Test Lot Summary Retrieval',
        details: 'Automates the creation of test lot summary from the corrupted Standard Test Data Format (STDF) due to tester hang up, error or malfunction and display it to the web application which reduces tester downtime and manual workload to operators and system administrators.',
        tools: 'HTML, CSS, JQuery, C# ASP.NET, ASP.NET Core (Frontend)',
        img: testlotsummary
    },
    {
        projectname: 'A5 UPH RE Automation',
        details: 'A real-time A5 testers monitoring system and dashboard that automatically calculates the real-time Units Per Hour (UPH) capacity of a Legacy ATE and display it to web using tables and graphs which prevents error caused by manual data extraction and calculation.',
        tools: 'HTML, SCSS, React.js, C#, PHP, Shell (SH) Script, MySQL, ChartJS',
        img: uphmonitoring
    },
    {
        projectname: 'Engineering Purging Tool',
        details: 'A tool used to real-time monitor and delete the Engineering and unnecessary Windows files of an Engineering ATEs to free up storage space.',
        tools: 'HTML, SCSS, React.js, C# ASP.NET Core, PHP, Shell (SH) Scripts, MySQL, ChartJS',
        img: engineeringpurgingtool
    },
    {
        projectname: 'LTC Supplemental File Upload',
        details: 'Automates the uploading of COR, DAT and XLS supplemental program files to manufacturing program server which reduces or eliminates the engineers file upload email request to the system administrators.',
        tools: 'HTML, SCSS, Angular, C# ASP.NET Core, PHP, MySQL',
        img: supplementalfileupload
    },
    {
        projectname: 'Drift File Transfer and Viewer',
        details: 'Automates the manufacturing manual process of transferring tester drift files from one tester to another tester or server which reduces tester downtime and manual workload of operators and system administrators.',
        tools: 'HTML, SCSS, React.js, C# ASP.NET, PHP, Shell (SH) Script, MySQL',
        img: driftfiletransfer
    },
    {
        projectname: 'IGFT Inventory',
        details: 'A system for management and tracking of IGFT CPU Spares',
        tools: 'HTML, CSS, React.js, PHP',
        img: igftinventory
    },
    {
        projectname: 'IGFT License Denied Monitoring',
        details: 'Enhanced automatic saving script for historical reference of the License denied report.',
        tools: 'HTML, CSS, PHP',
        img: licenseddeniedreport
    },
    {
        projectname: 'Xymon Tester Software Version Updater Tool',
        details: 'Used to update the software revision of different tester platform which used by Xymon Monitoring as reference for tester software monitoring',
        tools: 'HTML, CSS, PHP, MySQL, Jquery',
        img: testersoftwareversion
    },
    {
        projectname: 'Search and Download Non STDF File',
        details: 'A search web application where users can go to search and download archived ATE files.',
        tools: 'HTML, CSS, JQuery, PHP, Shell (SH) Script, MySQL',
        img: nonstdfcollection
    },
    {
        projectname: 'Xymon Alert Dashboard',
        details: 'A real-time dashboard monitoring of testers alert and warnings reported by xymon monitoring',
        tools: 'HTML, CSS, PHP, MySQL, Jquery, ChartJS',
        img: alertdashboard
    },
]

export const Desktop = [
    {
        projectname: 'ETS Data Viewer',
        details: 'Providing immediate action to reduce printing of ETS summary which consumes at least 4 pages per test conditions (Class, QAE ambient, hot and cold etc.).',
        tools: 'Windows Forms, C#, VB.NET',
        img: dataviewer
    },
    {
        projectname: 'TEST Information Systems Hardware Inventory',
        details: 'A system on the management of spares, tracking of withdrawn items, generate barcode for new items, and generate reports and graphs for administration purposes.',
        tools: 'Windows Forms, C#, SQLite',
        img: hardwareinventorydesktop
    },
    {
        projectname: 'MVTS DL2SUM',
        details: 'Retrieve and generate test lot summary report from unreadable DLOG file due to tester hang up, error or malfunction',
        tools: 'Windows Forms, C#',
        img: mvtsdl2sum
    },
    {
        projectname: 'Spink EXT CY Tools',
        details: 'Customized the existing Analog WPF desktop application to fit on ADGT systems.',
        tools: 'Microsoft WPF, C#',
        img: spinktools
    },
]

export const Script = [
    {
        projectname: 'Tester Disk Customization Closed Looping with Xymon Monitoring Website',
        details: 'Implement a post-checking to the testers in ADGT, which will result in a software feedback system that verifies the software versions installed in the testers.',
        tools: 'Windows Console, C#, Batch Script, MySQL, SH, HTML, PHP',
        img: xymonmonitoring
    },
    {
        projectname: 'PDF Exensio Folder Monitoring',
        details: 'Continuous monitor the selected Exensio folders that may affect server performance and slow data processing.',
        tools: 'Windows Console, C#',
        img: pdfexensio
    },
    {
        projectname: 'Unix, Linux, and Windows Script Development for Servers and ATEs',
        details: 'Developed automation, deployment, and audit scripts for troubleshooting, corrective actions, and maintenance of software applications and operating systems.',
        tools: 'C#, PHP, Batch Scripts, Shell (SH) Script, BASH, Perl',
        img: scripting
    },
]