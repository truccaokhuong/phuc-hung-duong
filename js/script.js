/* ===== THUỐC BẮC & DƯỢC LIỆU DATA ===== */
const menuItems = [
  // THUỐC THANG
  { name: 'Thang Bổ Huyết', desc: 'Đương quy, thục địa, bạch thược, xuyên khung', price: '85.000đ/thang', cat: 'thuoc-thang', icon: '🩸', color: '#c0392b', badge: 'Best Seller' },
  { name: 'Thang Bổ Khí', desc: 'Nhân sâm, bạch truật, phục linh, cam thảo', price: '120.000đ/thang', cat: 'thuoc-thang', icon: '💨', color: '#8b6f4e' },
  { name: 'Thang An Thần', desc: 'Toan táo nhân, viễn chí, liên tâm, phục thần', price: '75.000đ/thang', cat: 'thuoc-thang', icon: '😴', color: '#6b3a5b' },
  { name: 'Thang Hoạt Huyết', desc: 'Đan sâm, ngưu tất, hồng hoa, đào nhân', price: '90.000đ/thang', cat: 'thuoc-thang', icon: '💫', color: '#cc6b4a', badge: 'Hot' },
  { name: 'Thang Kiện Tỳ', desc: 'Bạch truật, phục linh, sơn tra, mạch nha', price: '70.000đ/thang', cat: 'thuoc-thang', icon: '🍚', color: '#d4a843' },
  { name: 'Thang Bổ Thận', desc: 'Đỗ trọng, ba kích, nhục thung dung, câu kỷ tử', price: '110.000đ/thang', cat: 'thuoc-thang', icon: '🫘', color: '#5a3a2a' },
  { name: 'Thang Giải Cảm', desc: 'Tía tô, kinh giới, bạc hà, cát cánh', price: '55.000đ/thang', cat: 'thuoc-thang', icon: '🤧', color: '#5a8f3c' },
  { name: 'Thang Bổ Phế', desc: 'Tang bạch bì, mạch môn, thiên môn, bách hợp', price: '80.000đ/thang', cat: 'thuoc-thang', icon: '🫁', color: '#c8d5b9' },

  // CAO ĐƠN
  { name: 'Cao Ích Mẫu', desc: 'Cao lỏng từ ích mẫu thảo, hương phụ', price: '250.000đ/lọ', cat: 'cao-don', icon: '🫙', color: '#8b1a1a', badge: 'Best Seller' },
  { name: 'Cao Bổ Phế', desc: 'Cao đặc từ bách bộ, tang bạch bì, tỳ bà diệp', price: '220.000đ/lọ', cat: 'cao-don', icon: '🍯', color: '#b8860b' },
  { name: 'Cao Bổ Thận', desc: 'Cao đặc từ ba kích, đỗ trọng, hà thủ ô', price: '320.000đ/lọ', cat: 'cao-don', icon: '🧴', color: '#5a3a2a' },
  { name: 'Hoàn Lục Vị', desc: 'Địa hoàng, sơn thù, hoài sơn, trạch tả', price: '180.000đ/hộp', cat: 'cao-don', icon: '💊', color: '#3d5a2e', badge: 'Hot' },
  { name: 'Hoàn Bát Vị', desc: 'Thục địa, sơn thù, hoài sơn, phụ tử, quế chi', price: '200.000đ/hộp', cat: 'cao-don', icon: '⚕️', color: '#6b4226' },
  { name: 'Tán Tiêu Viêm', desc: 'Hoàng liên, hoàng bá, kim ngân hoa', price: '160.000đ/hộp', cat: 'cao-don', icon: '🧪', color: '#a0724a' },

  // DƯỢC LIỆU
  { name: 'Nhân Sâm Hàn Quốc', desc: 'Củ sâm 6 năm tuổi, hấp sấy đúng quy trình', price: '450.000đ/củ', cat: 'duoc-lieu', icon: '🪵', color: '#8b6f4e', badge: 'Quý' },
  { name: 'Đông Trùng Hạ Thảo', desc: 'Nguyên con, nhập khẩu Tây Tạng', price: '850.000đ/10g', cat: 'duoc-lieu', icon: '🐛', color: '#cc6b4a' },
  { name: 'Tam Thất Bắc', desc: 'Củ tam thất rừng, đã rửa sạch phơi khô', price: '350.000đ/củ', cat: 'duoc-lieu', icon: '🟤', color: '#5a3a2a', badge: 'Best Seller' },
  { name: 'Linh Chi Đỏ', desc: 'Nấm linh chi rừng nguyên tai, Hàn Quốc', price: '280.000đ/tai', cat: 'duoc-lieu', icon: '🍄', color: '#c0392b' },
  { name: 'Hà Thủ Ô Đỏ', desc: 'Đã chế với đậu đen, an toàn khi dùng', price: '120.000đ/100g', cat: 'duoc-lieu', icon: '🥔', color: '#3d5a2e' },
  { name: 'Kỷ Tử Ninh Hạ', desc: 'Câu kỷ tử loại 1, hạt nhỏ ngọt đậm', price: '95.000đ/100g', cat: 'duoc-lieu', icon: '🔴', color: '#dc143c' },

  // TRÀ THẢO MỘC
  { name: 'Trà Linh Chi', desc: 'Linh chi thái lát + cam thảo + táo đỏ', price: '65.000đ/gói', cat: 'tra-thao-moc', icon: '🍵', color: '#8b4513', badge: 'Hot' },
  { name: 'Trà Hoa Cúc', desc: 'Cúc trắng sấy khô, thanh nhiệt giải độc', price: '45.000đ/gói', cat: 'tra-thao-moc', icon: '🏵️', color: '#f0d9a0' },
  { name: 'Trà Gừng Mật Ong', desc: 'Gừng sấy dẻo + mật ong rừng nguyên chất', price: '55.000đ/gói', cat: 'tra-thao-moc', icon: '🍯', color: '#d4a843' },
  { name: 'Trà Atiso Đà Lạt', desc: 'Atiso sấy khô, mát gan giải độc', price: '50.000đ/gói', cat: 'tra-thao-moc', icon: '🌼', color: '#5a8f3c', badge: 'Best Seller' },
  { name: 'Trà Thảo Quyết Minh', desc: 'Hạt muồng rang, thanh can sáng mắt', price: '40.000đ/gói', cat: 'tra-thao-moc', icon: '👁️', color: '#6b4226' },
  { name: 'Trà Tâm Sen', desc: 'Tâm sen sấy khô, an thần dễ ngủ', price: '48.000đ/gói', cat: 'tra-thao-moc', icon: '🪷', color: '#c8d5b9' },
];

/* ===== RENDER MENU ===== */
let activeCategory = 'all';

function renderMenu(category) {
  activeCategory = category;
  const grid = document.getElementById('menu-grid');
  const filtered = category === 'all' ? menuItems : menuItems.filter(item => item.cat === category);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-item" data-cat="${item.cat}">
      <div class="menu-item-icon" style="background:${item.color}20;">${item.icon}</div>
      <div class="menu-item-info">
        <h4>${item.name} ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}</h4>
        <div class="menu-desc">${item.desc}</div>
        <div class="menu-price">${item.price}</div>
      </div>
    </div>
  `).join('');

  // Bounce animation on items
  grid.querySelectorAll('.menu-item').forEach((el, i) => {
    el.style.animation = `fadeInUp 0.3s ease-out ${i * 0.04}s forwards`;
    el.style.opacity = '0';
  });
}

// Add fadeInUp keyframes dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

/* ===== MENU TABS ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');

  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.cat);
    });
  });

  /* ===== NAV ACTIVE LINK ON SCROLL ===== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
    // Default to home if at top
    if (window.scrollY < 200) {
      navLinks.forEach(l => l.classList.remove('active'));
      navLinks[0].classList.add('active');
    }
  });
});

/* ===== TOAST ===== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ===== CONTACT FORM ===== */
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    showToast('Vui lòng điền đầy đủ họ tên và triệu chứng!', 'error');
    return;
  }

  // Simulate form submission
  showToast(`Cảm ơn ${name}! Lương y sẽ liên hệ tư vấn cho bạn trong thời gian sớm nhất 🌿`, 'success');
  event.target.reset();
}

/* ===== SMOOTH SCROLL FOR INTERNAL LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
