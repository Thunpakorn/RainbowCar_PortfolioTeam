/**
 * TEAM PORTFOLIO INTERACTIVE APPLICATION
 * Standard HTML, CSS, JavaScript Implementation
 */

// Full Verbatim Data extracted strictly from PDF Document
const projectData = {
  1: {
    title: "ผลงานรางวัลชนะเลิศอันดับ 1 รายการ BUtop Projectz",
    subtitle: "Smart Health Station (ตู้ตรวจสุขภาพอัจฉริยะแบบ All-in-One)",
    category: "รายการ BUtop Projectz",
    image: "assets/project1_butop.jpg",
    paragraphs: [
      `เคยมั้ยครับ? ชั่งน้ำหนักเสร็จแล้วได้มาแค่ตัวเลข แต่ไม่รู้ว่าต้องทำอย่างไรต่อ นี่คือหนึ่งใน "กับดักสุขภาพ" ที่หลายคนกำลังเผชิญ รวมถึงความยุ่งยากที่ต้องใช้อุปกรณ์หลายชิ้นในการวัดค่าสุขภาพพื้นฐาน และปัญหาข้อมูลที่กระจัดกระจายติดตามผลได้ยาก จากจุดเริ่มต้นนี้ ผมและทีมจึงได้คิดค้นและพัฒนา "Smart Health Station" หรือตู้ตรวจสุขภาพอัจฉริยะแบบ All-in-One ขึ้นมา เพื่อเป็นทางออกของปัญหาดังกล่าว`,
      
      `แนวคิดหลักของเราคือการสร้าง "นักแปลสุขภาพ" ที่ไม่เพียงแค่วัดค่า แต่เปลี่ยนข้อมูลดิบให้เป็นเป้าหมายที่ลงมือทำได้จริงแบบเฉพาะบุคคล ในด้านการออกแบบทางวิศวกรรม ผมได้บูรณาการระบบไมโครคอนโทรลเลอร์เข้ากับชุดเซ็นเซอร์เพื่อให้ทำงานร่วมกันได้อย่างแม่นยำ ทั้งเซ็นเซอร์ ToF (VL53L1X) สำหรับวัดส่วนสูง, Load Cell (HX711) วัดน้ำหนัก, เซ็นเซอร์อินฟราเรด (GY-906) วัดอุณหภูมิแบบไร้สัมผัส และ Pulse Oximeter (MAX30102) สำหรับวัดออกซิเจนในเลือดและชีพจร ซึ่งทั้งหมดนี้สามารถวัดผลจบได้ภายใน 1 นาทีด้วยเครื่องเดียว`,
      
      `หลังจากวัดค่าเสร็จสิ้น ระบบจะสร้าง QR Code เพื่อให้ผู้ใช้สแกนดึงข้อมูลเข้าสู่แอปพลิเคชัน MyHealth Station บนสมาร์ทโฟนของตนเองอย่างปลอดภัย จากนั้นแอปพลิเคชันจะประมวลผลข้อมูลร่วมกับระดับกิจกรรมของผู้ใช้ เพื่อคำนวณค่า BMI, BMR และแปลงเป็นเป้าหมายแคลอรี่รายวัน (TDEE) รวมถึงปริมาณน้ำที่ควรดื่มโดยอัตโนมัติ`,
      
      `ผลลัพธ์จากการทดสอบกับผู้ใช้งานจริงจำนวน 127 คน พบว่า 95.2% ยืนยันว่าระบบ All-in-One นี้สะดวกกว่าการใช้อุปกรณ์แยกชิ้น และที่สำคัญคือ 75.8% สามารถนำข้อมูลเชิงลึกที่ได้รับไปปรับเปลี่ยนพฤติกรรมสุขภาพของตนเองได้จริง โปรเจกต์ Smart Health Station จึงไม่ใช่แค่ความสำเร็จในการสร้างสรรค์เทคโนโลยีที่ได้รับรางวัลชนะเลิศ แต่คือความภูมิใจที่ได้นำนวัตกรรมมาเปลี่ยนระบบสาธารณสุขจากการ "รักษาเชิงรับ" สู่การ "ป้องกันเชิงรุก" เพื่อสร้างสังคมสุขภาพดีอย่างยั่งยืน`
    ]
  },
  2: {
    title: "ผลงานเข้ารอบ 8 ทีมสุดท้าย รายการ Automation & AI",
    subtitle: "Computer Vision AI & แขนกลหุ่นยนต์คัดแยกสินค้า Real-time",
    category: "รายการ Automation & AI",
    image: "assets/project2_automation_arm.jpg",
    paragraphs: [
      `"เวลา 20 นาที กับการผสาน AI เข้ากับแขนกลหุ่นยนต์ที่ไม่เคยซ้อมมาก่อน" นี่คือสถานการณ์จริงที่ข้าพเจ้าและทีมต้องเผชิญในการแข่งขัน Automation & AI ระดับประเทศ ท่ามกลางผู้เข้าแข่งขันกว่า 40 ทีมทั่วประเทศ ภายใต้ความกดดันที่ทุกคนมือสั่นเหงื่อไหล ทีมของข้าพเจ้าสามารถพัฒนาระบบ Computer Vision AI เพื่อคัดแยกสินค้าแบบ Real-time และควบคุมแขนกลได้สำเร็จภายในเวลาเพียง 3-4 นาทีในรอบคัดเลือก จนก้าวเข้าสู่รอบ 8 ทีมสุดท้าย และเป็นทีมเดียวจากมหาวิทยาลัยกรุงเทพที่ยืนหยัดบนเวทีรอบชิงชนะเลิศได้อย่างสมศักดิ์ศรี`,
      
      `ความสำเร็จในวันนั้นไม่ใช่เรื่องบังเอิญ แต่เกิดจากการสั่งสมประสบการณ์และความหลงใหลในเทคโนโลยีอย่างลึกซึ้ง ข้าพเจ้าเชื่อเสมอว่าวิศวกรรมไม่ใช่แค่ทฤษฎีในห้องเรียน แต่คือ "การลงมือทำ" ข้าพเจ้าเริ่มต้นจากการศึกษาและออกแบบวงจรอิเล็กทรอนิกส์ (IoT) ผ่านโปรแกรม KiCad และ SnapMagic รวมถึงการสร้างสรรค์ชิ้นงานจริงผ่านเทคโนโลยี 3D Modeling และ 3D Printing ทักษะเหล่านี้สอนให้ข้าพเจ้ามีกระบวนการคิดอย่างเป็นระบบ (Systems Thinking) และคุ้นเคยกับการแก้ปัญหาเฉพาะหน้า ซึ่งกลายเป็นอาวุธสำคัญที่ทำให้ทีมของเราสามารถรับมือกับอุปกรณ์หุ่นยนต์จริงที่หน้างานได้อย่างรวดเร็ว แม้จะไม่มีเครื่องมือให้ฝึกซ้อมมาก่อนก็ตาม`,
      
      `นอกจากการควบคุมฮาร์ดแวร์แล้ว ข้าพเจ้ายังให้ความสำคัญกับ "สมอง" ของระบบ ข้าพเจ้าได้ขยายขอบเขตความรู้สู่โลกของข้อมูล ปัญญาประดิษฐ์ และความปลอดภัยทางไซเบอร์ โดยได้เข้าร่วมศึกษาหลักสูตร AI for Cybersecurity (RMUTL) และร่วมวิเคราะห์โครงการ Smart Health Station ทำให้ข้าพเจ้าตระหนักว่านวัตกรรมแห่งอนาคตต้องประกอบไปด้วยความชาญฉลาด ความปลอดภัย และความสามารถในการทำงานร่วมกับมนุษย์ได้อย่างไร้รอยต่อ เช่นเดียวกับการทำงานของทีมข้าพเจ้าในสนามแข่งขัน ที่เราสามารถแบ่งหน้าที่และสื่อสารกันได้อย่างมีประสิทธิภาพจนแทบไม่ต้องเอ่ยปาก เพราะเรา "ซิงก์" กันในทุกวินาที`,
      
      `ในอีกมิติหนึ่ง ข้าพเจ้าเชื่อว่าเทคโนโลยีจะสมบูรณ์แบบได้ต้องมีศิลปะเข้ามาเจือปน ข้าพเจ้ามีความสนใจในด้านดนตรีและการออกแบบเสียง (Music Production & Sound Design) การได้เข้าร่วมเวิร์กชอป "Soft Power Beyond AI" เปิดมุมมองให้ข้าพเจ้าเห็นถึงการนำ AI มาใช้ในอุตสาหกรรมสร้างสรรค์ ข้าพเจ้าจึงไม่ใช่แค่นักเทคโนโลยี แต่เป็นนวัตกรที่มองเห็นความเชื่อมโยงระหว่าง "ตรรกะทางวิศวกรรม" และ "สุนทรียภาพทางศิลปะ" (Multidisciplinary)`,
      
      `ประสบการณ์จากสนาม Hackathon หุ่นยนต์ ได้พิสูจน์ให้ข้าพเจ้าเห็นแล้วว่า ในยุคที่ Automation และ AI กำลังขับเคลื่อนโลก สิ่งที่สำคัญกว่าเครื่องมือคือ "ความสามารถในการเรียนรู้" และ "ความกล้าที่จะก้าวออกจากขีดจำกัดเดิม" ข้าพเจ้ามีความพร้อมและมุ่งมั่นอย่างยิ่งที่จะนำจิตวิญญาณแห่งการเรียนรู้ การทำงานเป็นทีม และทักษะที่ผสมผสานทั้งฮาร์ดแวร์ ซอฟต์แวร์ และศิลปะนี้ ไปศึกษาต่อและพัฒนาตนเอง เพื่อก้าวขึ้นเป็นวิศวกรผู้สร้างสรรค์นวัตกรรมที่สามารถเปลี่ยนแปลงสังคมได้จริงในอนาคต`
    ]
  },
  3: {
    title: "ผลงานเข้ารอบ 38 ทีมสุดท้าย Learn Lab 2025: Soft Power Beyond",
    subtitle: "PIXIE BOX - ระบบ Photobooth อัจฉริยะ (ทีม Siam Pose)",
    category: "Learn Lab 2025: Soft Power Beyond",
    image: "assets/project3_learnlab.jpg",
    paragraphs: [
      `ข้าพเจ้ามีความเชื่อเสมอมาว่า นวัตกรรมที่ทรงพลังที่สุดไม่ได้เกิดจากโค้ดที่ซับซ้อนเพียงอย่างเดียว แต่เกิดจากการผสานเทคโนโลยีเข้ากับความเข้าใจในความเป็นมนุษย์ (Human-centric) เส้นทางความหลงใหลของข้าพเจ้าเริ่มต้นจากการหลงใหลในกลไกของฮาร์ดแวร์ การออกแบบวงจร IoT ผ่าน KiCad การขึ้นรูปด้วย 3D Printing ไปจนถึงการหลงใหลในศิลปะแห่งเสียง (Music Production) ทักษะเหล่านี้หล่อหลอมให้ข้าพเจ้ามีกระบวนการคิดแบบบูรณาการ (Multidisciplinary) และพร้อมที่จะนำเทคโนโลยีมาแก้ปัญหาในโลกแห่งความเป็นจริง`,
      
      `ประสบการณ์ที่ท้าทายขีดจำกัดของข้าพเจ้ามากที่สุดครั้งหนึ่ง คือการแข่งขัน Automation & AI ระดับประเทศในรูปแบบ "Hackathon หุ่นยนต์" ท่ามกลางความกดดันที่ต้องเรียนรู้อุปกรณ์จริงหน้างาน ทีมของข้าพเจ้าใช้เวลาเพียง 20 นาทีในการพัฒนาระบบ Computer Vision AI ให้ทำงานร่วมกับแขนกลหุ่นยนต์เพื่อคัดแยกสินค้าแบบ Real-time จนสามารถฝ่าฟันผู้เข้าแข่งขันกว่า 40 ทีม ทะลุเข้าสู่รอบ 8 ทีมสุดท้าย และเป็นทีมเดียวจากมหาวิทยาลัยกรุงเทพในรอบชิงชนะเลิศ ประสบการณ์ครั้งนั้นพิสูจน์ให้เห็นว่า ทักษะการแก้ปัญหาเฉพาะหน้า การทำงานเป็นทีม และความกล้าที่จะเรียนรู้สิ่งใหม่ คืออาวุธที่สำคัญยิ่งกว่าเครื่องมือใดๆ`,
      
      `อย่างไรก็ตาม ข้าพเจ้าไม่ได้มองเทคโนโลยีเป็นเพียงเครื่องมือสำหรับภาคอุตสาหกรรม แต่ยังเป็น "สะพาน" ที่สามารถเชื่อมโยงวัฒนธรรมเข้ากับคนรุ่นใหม่ ข้าพเจ้าและทีม "Siam Pose" ได้นำแนวคิดนี้ไปต่อยอดในโครงการ Learn Lab 2025: Soft Power Beyond AI จนผ่านเข้ารอบ 38 ทีมสุดท้ายระดับประเทศ ด้วยผลงานนวัตกรรม "PIXIE BOX" ระบบ Photobooth อัจฉริยะที่ไม่ได้ทำได้แค่เปลี่ยนชุดลิเกแบบ Real-time แต่ยังใช้เทคโนโลยี AI Pose Estimation ตรวจจับการเคลื่อนไหวของร่างกายให้ผู้ใช้งานสนุกกับการจับคู่ท่ารำไทย`,
      
      `PIXIE BOX เกิดขึ้นจากแรงบันดาลใจที่ต้องการลบภาพจำที่ว่า "ความเป็นไทยคือความน่าอาย" และเปลี่ยนให้กลายเป็นกระแสไวรัลบนโซเชียลมีเดีย โครงการนี้ไม่เพียงท้าทายทักษะทางเทคนิค แต่ยังเปิดโลกทัศน์ของข้าพเจ้าในมิติของการบริหารธุรกิจ ข้าพเจ้าได้เรียนรู้การทำ Business Model Canvas การวิเคราะห์ตลาด และการนำเสนอ Pitch Deck แบบ One Page Summary ภายในเวลาเพียง 1 นาที สิ่งเหล่านี้สอนให้ข้าพเจ้ารู้ว่า นวัตกรรมที่ดีต้องไม่หยุดอยู่แค่ในห้องทดลอง แต่ต้องสามารถตอบโจทย์ทางธุรกิจและสร้างแรงกระเพื่อมต่อสังคมได้จริง (Social Impact)`,
      
      `จากแขนกลหุ่นยนต์ที่คัดแยกสินค้าในภาคอุตสาหกรรม สู่ AI Photobooth ที่ยกระดับศิลปะการแสดงท้องถิ่น ข้าพเจ้าได้พิสูจน์แล้วว่าตนเองมีความพร้อมทั้งทักษะ Hard Skills ในการพัฒนาเทคโนโลยี และ Soft Skills ในการบริหารจัดการ ข้าพเจ้ามีความมุ่งมั่นอย่างยิ่งที่จะนำจิตวิญญาณของนวัตกรที่กล้าคิด กล้าทำ และกล้าก้าวออกจากกรอบเดิมๆ นี้ ไปศึกษาต่อและพัฒนาตนเองในระดับที่สูงขึ้น เพื่อสร้างสรรค์เทคโนโลยีที่ไม่ได้เพียงแค่ชาญฉลาด แต่ยังมีจิตวิญญาณและสามารถขับเคลื่อนสังคมไทยให้ก้าวไปข้างหน้าได้อย่างยั่งยืน`
    ]
  }
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFilterTabs();
  initScrollTop();
  initSmoothScroll();
});

// Mobile Navbar Toggle
function initNavbar() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

// Filter Tabs Logic
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Scroll to Top Button
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth Scrolling for Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Open Detail Modal with Verbatim Text
function openDetailModal(id) {
  const data = projectData[id];
  if (!data) return;

  const modal = document.getElementById('detailModal');
  const title = document.getElementById('modalTitle');
  const subtitle = document.getElementById('modalSubtitle');
  const category = document.getElementById('modalCategory');
  const image = document.getElementById('modalImage');
  const content = document.getElementById('modalContent');

  title.textContent = data.title;
  subtitle.textContent = data.subtitle;
  category.textContent = data.category;
  image.src = data.image;
  image.alt = data.title;

  // Insert paragraphs verbatim
  content.innerHTML = data.paragraphs.map(p => `<p>${p}</p>`).join('');

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Close Detail Modal
function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Open Lightbox Image Viewer
function openLightbox(imgSrc, captionText) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');

  img.src = imgSrc;
  caption.textContent = captionText || '';

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Close Lightbox Image Viewer
function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Keydown ESC handler to close modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDetailModal();
    closeLightbox();
  }
});
