/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Theme and Data Configurations ---
const THEME_CONFIGS = {
  theme1: {
    id: 'theme1',
    name: 'Chữa Lành & Bình Yên',
    vibe: 'Healing, chill, chữa lành, bình yên',
    bgMain: '#F9F8F6',
    textMain: '#2C2A29',
    textMuted: '#6B6865',
    panelBg: '#FFFFFF',
    borderColor: 'rgba(44, 42, 41, 0.08)',
    accent: '#8C8275',
    accentText: '#FFFFFF',
    vibeTagline: 'Mọi chuyện rồi sẽ bình yên thôi...',
    vinylCenterImage: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=150',
    presetImages: [
      {
        url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200',
        label: 'Tách trà ấm bên ô cửa',
        credit: 'Clay Banks'
      },
      {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200',
        label: 'Nắng xuyên kẽ lá',
        credit: 'Sebastian Unrau'
      },
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200',
        label: 'Boss lười sưởi nắng',
        credit: 'Paul Hanaoka'
      },
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
        label: 'Sóng biển vỗ về',
        credit: 'Sean Oulashin'
      }
    ]
  },
  theme2: {
    id: 'theme2',
    name: 'Deep & Suy Tư',
    vibe: 'Deep, suy tư, a little sad but not too much (hơi buồn nhẹ nhàng, không bi lụy)',
    bgMain: '#2D3238',
    textMain: '#F4F5F6',
    textMuted: '#A3AAB2',
    panelBg: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(244, 245, 246, 0.15)',
    accent: '#5E66F6',
    accentText: '#FFFFFF',
    vibeTagline: 'Một chút hoài niệm, một chút suy tư...',
    vinylCenterImage: 'https://images.unsplash.com/photo-1487180142328-054b783fc471?q=80&w=150',
    presetImages: [
      {
        url: 'https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=1200',
        label: 'Mưa nhòe phố vắng',
        credit: 'Valentin Muller'
      },
      {
        url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200',
        label: 'Ngọn đèn dầu đêm muộn',
        credit: 'Goran Horvat'
      },
      {
        url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200',
        label: 'Hoàng hôn khói sương',
        credit: 'Veeterzy'
      },
      {
        url: 'https://images.unsplash.com/photo-1539628390114-16cff2341517?q=80&w=1200',
        label: 'Mâm đĩa than cũ kỹ',
        credit: 'Adrian Korte'
      }
    ]
  },
  theme3: {
    id: 'theme3',
    name: 'Rage Bait & Gen Z',
    vibe: 'Rage bait, joking, hài hước, trêu đùa, ngôn từ GenZ',
    bgMain: '#FFF0F5',
    textMain: '#1D1C1A',
    textMuted: '#7D7875',
    panelBg: '#FFFFFF',
    borderColor: 'rgba(29, 28, 26, 0.12)',
    accent: '#FF6B6B',
    accentText: '#FFFFFF',
    vibeTagline: 'Ủa alo? Không vô tri đời không nể nha quý dzị!',
    vinylCenterImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150',
    presetImages: [
      {
        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200',
        label: 'Phá đảo thế giới ảo',
        credit: 'Carl Raw'
      },
      {
        url: 'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?q=80&w=1200',
        label: 'Graffiti góc phố quậy phá',
        credit: 'Kamil d'
      },
      {
        url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200',
        label: 'Meme và những thứ khác',
        credit: 'Ales Nesetril'
      },
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200',
        label: 'Vibe rực rỡ vui vẻ',
        credit: 'Lorenzo Herrera'
      }
    ]
  }
};

const DEFAULT_QUOTES = {
  theme1: JSON.stringify({
    quoteVN: "Bão tố ngoài kia xin lỗi đành 'seen', hôm nay tâm trí chỉ ưu tiên 'chữa lành'. 🌿🍵☁️",
    captionVN: "Trạm sạc bình yên cho một ngày lỡ mệt nhoài với thế giới ngoài kia.",
    quoteEN: "Sorry, but I 'seen' the storms of the world; today my mind only prioritizes self-healing.",
    captionEN: "A peaceful charging station for a day spent wrestling with the world outside.",
    musicQuery: "lofi acoustic việt nam"
  }),
  theme2: JSON.stringify({
    quoteVN: "Người ta ôm mộng giàu sang, tôi ôm mộng thấy anh sang ngang đón mình. 🚬🥀",
    captionVN: "Nhạc lofi bật lên, overthinking bắt đầu trỗi dậy giữa màn đêm.",
    quoteEN: "Others dream of wealth and gold, I dream of you turning back to fetch me.",
    captionEN: "With the lofi playing, overthinking starts creeping up in the dead of night.",
    musicQuery: "nhạc suy buồn"
  }),
  theme3: JSON.stringify({
    quoteVN: "Sống hướng nội quen rồi, xin đừng ép tôi phải giả bộ niềm nở thảo mai 🙄💅",
    captionVN: "Chút cọc cằn sương sương chống lại cả thế giới lắm deadline và rắc rối.",
    quoteEN: "So used to being introverted, don't force me to fake a welcoming, superficial grin.",
    captionEN: "A little crankiness to combat a world filled with endless deadlines and chaos.",
    musicQuery: "rap việt remix tiktok"
  })
};

const FILTER_PRESETS = [
  { id: 'normal', name: 'Bình thường' },
  { id: 'vintage', name: 'Hoài cổ' },
  { id: 'bw', name: 'Trắng đen' },
  { id: 'warm', name: 'Ấm áp' },
  { id: 'cool', name: 'Mát lạnh' }
];

// --- Global App State Variables ---
let currentThemeId = 'theme1';
let geminiApiKey = '';
let currentImageUrl = '';
let currentImageFilter = 'normal';
let isPlaying = false;
let isMuted = false;
let currentVolume = 0.5;
let currentTrack = null;
let trackList = [];
let savedEntries = [];
let dateStr = '';
let timeStr = '';
let isDarkMode = localStorage.getItem('is_dark_mode') === 'true';
let currentQuoteRawText = DEFAULT_QUOTES.theme1;

// --- DOM References ---
const audioEl = document.getElementById('itunes-audio');
const polaroidImg = document.getElementById('polaroid-image');
const stampDateEl = document.getElementById('stamp-date');
const stampTimeEl = document.getElementById('stamp-time');
const presetThumbnailsContainer = document.getElementById('preset-thumbnails');
const filterButtonsContainer = document.getElementById('filter-buttons-container');

const toggleConfigBtn = document.getElementById('toggle-config-btn');
const configChevron = document.getElementById('config-chevron');
const configPanelContent = document.getElementById('config-panel-content');
const geminiKeyInput = document.getElementById('gemini-key-input');
const saveKeyBtn = document.getElementById('save-key-btn');
const keyStatusMsg = document.getElementById('key-status-msg');

const toggleUrlInputBtn = document.getElementById('toggle-url-input-btn');
const urlInputPanel = document.getElementById('url-input-panel');
const customImageUrlInput = document.getElementById('custom-image-url');
const saveImageUrlBtn = document.getElementById('save-image-url-btn');
const localImageInput = document.getElementById('local-image-input');
const imageDragDropZone = document.getElementById('image-drag-drop-zone');

const vinylRecord = document.getElementById('vinyl-record');
const vinylCenterImg = document.getElementById('vinyl-center-img');
const tonearm = document.getElementById('tonearm');
const musicLoader = document.getElementById('music-loader');
const musicDetails = document.getElementById('music-details');
const songTitleArtist = document.getElementById('song-title-artist');
const songCollection = document.getElementById('song-collection');
const musicErrorMsg = document.getElementById('music-error-msg');
const musicPlayBtn = document.getElementById('music-play-btn');
const playBtnIcon = document.getElementById('play-btn-icon');
const musicNextBtn = document.getElementById('music-next-btn');
const musicMuteBtn = document.getElementById('music-mute-btn');
const muteBtnIcon = document.getElementById('mute-btn-icon');
const musicVolumeSlider = document.getElementById('music-volume-slider');
const musicQueryTerm = document.getElementById('music-query-term');

const quoteText = document.getElementById('quote-text');
const quoteLoader = document.getElementById('quote-loader');
const quoteDisplayContainer = document.getElementById('quote-display-container');
const quoteShuffleBtn = document.getElementById('quote-shuffle-btn');

const journalTitleInput = document.getElementById('journal-title-input');
const journalContentInput = document.getElementById('journal-content-input');
const resetFormBtn = document.getElementById('reset-form-btn');
const saveJournalBtn = document.getElementById('save-journal-btn');
const savedEntriesList = document.getElementById('saved-entries-list');
const savedCountBadge = document.getElementById('saved-count-badge');
const emptyFeedPlaceholder = document.getElementById('empty-feed-placeholder');
const notificationContainer = document.getElementById('notification-container');

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  // Load saved configurations
  geminiApiKey = localStorage.getItem('gemini_api_key') || '';
  geminiKeyInput.value = geminiApiKey;
  updateKeyStatusDisplay();

  const savedEntriesRaw = localStorage.getItem('vibe_journal_entries');
  if (savedEntriesRaw) {
    try {
      savedEntries = JSON.parse(savedEntriesRaw);
    } catch (e) {
      console.error('Lỗi phân tích nhật ký:', e);
    }
  }

  // Set stamps
  updateDateTimeStamps();

  // Initialize Dark Mode feature
  initDarkMode();

  // Boot with an initial image so we have one by default
  currentImageUrl = THEME_CONFIGS.theme1.presetImages[0].url;

  // Load Theme 1 without auto playing music on first render to comply with browser autoplay
  applyTheme('theme1', false);

  // Render Saved Entries List
  renderSavedEntries();

  // Set up event listeners
  setupEventListeners();

  // Initialize Lucide Vector Icons
  lucide.createIcons();
});

// --- Utility: Show Notifications ---
function showNotification(message) {
  const toast = document.createElement('div');
  toast.className = `notification-toast flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md border transition-all duration-300 max-w-sm`;
  toast.style.backgroundColor = 'var(--panel-bg)';
  toast.style.borderColor = 'var(--border-color)';
  toast.style.color = 'var(--text-main)';

  toast.innerHTML = `
    <i data-lucide="info" class="w-4 h-4 text-stone-400 shrink-0"></i>
    <span>${message}</span>
  `;
  notificationContainer.appendChild(toast);
  lucide.createIcons();

  // Auto remove after 3s
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// --- Stamp Updater ---
function updateDateTimeStamps() {
  const now = new Date();
  dateStr = now.toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric', year: 'numeric' });
  timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false });
  stampDateEl.textContent = dateStr;
  stampTimeEl.textContent = timeStr;
}

// --- Dark Mode Feature ---
function initDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (!darkModeToggle) return;

  // Sync state & UI on boot
  updateDarkModeUI();

  darkModeToggle.onclick = () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('is_dark_mode', isDarkMode);
    updateDarkModeUI();
    applyTheme(currentThemeId, false); // Reload colors with mode adjustments
    showNotification(isDarkMode ? '🌙 Đã chuyển sang Vibe ban đêm (Tắt đèn)' : '☀️ Đã chuyển sang Vibe ban ngày (Bật đèn)');
  };
}

// --- Dark Mode UI Sync ---
function updateDarkModeUI() {
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const darkModeText = document.querySelector('#dark-mode-toggle span');
  if (!darkModeIcon) return;

  if (isDarkMode) {
    darkModeIcon.setAttribute('data-lucide', 'sun');
    if (darkModeText) darkModeText.textContent = 'Bật đèn';
    document.body.classList.add('dark');
  } else {
    darkModeIcon.setAttribute('data-lucide', 'moon');
    if (darkModeText) darkModeText.textContent = 'Tắt đèn';
    document.body.classList.remove('dark');
  }
  lucide.createIcons();
}

// Helper to strip markdown formatting and safely parse JSON
function cleanAndParseJSON(rawText) {
  let text = rawText.trim();
  // Strip markdown code block wrappers if any
  if (text.startsWith('```')) {
    text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  }
  return JSON.parse(text.trim());
}

// --- Dynamic Quote Renderer (Prevents truncation and formats Main Quote + Caption in both VN & EN) ---
function renderQuoteText(quoteObjOrString) {
  let quoteVN = "";
  let captionVN = "";
  let quoteEN = "";
  let captionEN = "";

  if (typeof quoteObjOrString === 'object' && quoteObjOrString !== null) {
    quoteVN = quoteObjOrString.quoteVN || "";
    captionVN = quoteObjOrString.captionVN || "";
    quoteEN = quoteObjOrString.quoteEN || "";
    captionEN = quoteObjOrString.captionEN || "";
    currentQuoteRawText = JSON.stringify(quoteObjOrString);
  } else {
    // Try to parse if it is a JSON string
    try {
      const parsed = cleanAndParseJSON(quoteObjOrString);
      quoteVN = parsed.quoteVN || "";
      captionVN = parsed.captionVN || "";
      quoteEN = parsed.quoteEN || "";
      captionEN = parsed.captionEN || "";
      currentQuoteRawText = quoteObjOrString;
    } catch (e) {
      // Fallback if it is legacy multiline string
      currentQuoteRawText = quoteObjOrString;
      const cleaned = quoteObjOrString.replace(/["']/g, '').trim();
      if (cleaned.includes('\n')) {
        const parts = cleaned.split('\n').map(p => p.trim()).filter(Boolean);
        if (parts.length >= 2) {
          quoteVN = parts[0];
          captionVN = parts.slice(1).join('<br>');
        } else {
          quoteVN = cleaned;
        }
      } else {
        quoteVN = cleaned;
      }
    }
  }

  // Build beautiful HTML rendering Vietnamese on top, English in a slightly lighter/smaller font below
  let html = '';
  
  // Vietnamese Section
  if (quoteVN) {
    html += `
      <div class="mb-3">
        <span class="block text-sm md:text-base font-extrabold mb-1.5 leading-relaxed" style="color: var(--text-main);">"${quoteVN}"</span>
        ${captionVN ? `<span class="block text-[11px] md:text-xs tracking-wide opacity-80 italic" style="color: var(--text-muted);">${captionVN}</span>` : ''}
      </div>
    `;
  }
  
  // English Section (lighter, smaller, italic, with a small divider line)
  if (quoteEN) {
    html += `
      <div class="border-t pt-2.5 mt-2.5 border-dashed" style="border-color: var(--border-color);">
        <span class="block text-xs md:text-sm font-semibold italic mb-1 leading-relaxed opacity-75" style="color: var(--text-main);">"${quoteEN}"</span>
        ${captionEN ? `<span class="block text-[10px] md:text-[11px] tracking-wide opacity-60 italic" style="color: var(--text-muted);">${captionEN}</span>` : ''}
      </div>
    `;
  }

  if (!html) {
    html = `<span class="block text-sm md:text-base font-bold leading-relaxed" style="color: var(--text-main);">Không có nội dung quote.</span>`;
  }

  quoteText.innerHTML = html;
}

// --- Theme Management ---
function applyTheme(themeId, autoPlayMusic = true) {
  currentThemeId = themeId;
  const vars = THEME_CONFIGS[themeId];
  if (!vars) return;

  // Sync Global CSS variables dynamically with dark mode accommodations
  const root = document.documentElement;
  if (isDarkMode) {
    if (themeId === 'theme1') {
      root.style.setProperty('--bg-main', '#1A1918');
      root.style.setProperty('--text-main', '#E5E3E1');
      root.style.setProperty('--text-muted', '#9E9A96');
      root.style.setProperty('--panel-bg', '#252422');
      root.style.setProperty('--border-color', 'rgba(229, 227, 225, 0.1)');
      root.style.setProperty('--accent', '#A1988B');
      root.style.setProperty('--accent-text', '#1A1918');
    } else if (themeId === 'theme2') {
      root.style.setProperty('--bg-main', '#13161A');
      root.style.setProperty('--text-main', '#EAECEE');
      root.style.setProperty('--text-muted', '#8A939D');
      root.style.setProperty('--panel-bg', '#1E2228');
      root.style.setProperty('--border-color', 'rgba(234, 236, 238, 0.1)');
      root.style.setProperty('--accent', '#767DF8');
      root.style.setProperty('--accent-text', '#13161A');
    } else {
      root.style.setProperty('--bg-main', '#2D1E24');
      root.style.setProperty('--text-main', '#FFE6EE');
      root.style.setProperty('--text-muted', '#C1A5B0');
      root.style.setProperty('--panel-bg', '#3D2C33');
      root.style.setProperty('--border-color', 'rgba(255, 230, 238, 0.12)');
      root.style.setProperty('--accent', '#FF8585');
      root.style.setProperty('--accent-text', '#2D1E24');
    }
  } else {
    root.style.setProperty('--bg-main', vars.bgMain);
    root.style.setProperty('--text-main', vars.textMain);
    root.style.setProperty('--text-muted', vars.textMuted);
    root.style.setProperty('--panel-bg', vars.panelBg);
    root.style.setProperty('--border-color', vars.borderColor);
    root.style.setProperty('--accent', vars.accent);
    root.style.setProperty('--accent-text', vars.accentText);
  }

  // Update theme button selection styles
  ['theme1', 'theme2', 'theme3'].forEach(tid => {
    const btn = document.getElementById(`theme-select-${tid}`);
    if (btn) {
      if (tid === themeId) {
        btn.style.backgroundColor = 'var(--accent)';
        btn.style.color = 'var(--accent-text)';
      } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--text-muted)';
      }
    }
  });

  // REQUIREMENT: IMAGE PERSISTENCE.
  // We DO NOT overwrite currentImageUrl with the theme preset images if an image is already loaded on the screen.
  if (!currentImageUrl) {
    setPolaroidImage(vars.presetImages[0].url);
  } else {
    // Keep current image displayed!
    polaroidImg.src = currentImageUrl;
  }

  // Set default theme quote (using JSON representations)
  renderQuoteText(DEFAULT_QUOTES[themeId]);

  // Sync Turntable labels
  vinylCenterImg.src = vars.vinylCenterImage;

  // Render Thumbnails of this Theme
  renderPresetThumbnails(vars.presetImages);

  // Render Filter Buttons (with correct accent highlights)
  renderFilterButtons();

  // Load corresponding iTunes Music List using GenZ trendy lists (Only if image is present)
  if (currentImageUrl) {
    // Parse default quote to fetch initial default query term
    try {
      const defaultQuoteParsed = JSON.parse(DEFAULT_QUOTES[themeId]);
      fetchThemeMusic(themeId, autoPlayMusic, defaultQuoteParsed.musicQuery);
    } catch(err) {
      fetchThemeMusic(themeId, autoPlayMusic);
    }
  }
}

// --- Polaroid & Filters Rendering ---
function setPolaroidImage(url) {
  currentImageUrl = url;
  polaroidImg.src = url;
}

function handleImageFile(file) {
  if (!file.type.startsWith('image/')) {
    showNotification('⚠️ Vui lòng chỉ chọn tệp hình ảnh!');
    return;
  }
  const localUrl = URL.createObjectURL(file);
  setPolaroidImage(localUrl);
  urlInputPanel.classList.add('hidden');
  showNotification('📸 Đã tải lên ảnh từ thiết bị của bạn!');
  // Update preset highlights (deselect previous preset images)
  const currentTheme = THEME_CONFIGS[currentThemeId];
  renderPresetThumbnails(currentTheme.presetImages);
}

// Render thumbnails of this Theme
function renderPresetThumbnails(presetList) {
  presetThumbnailsContainer.innerHTML = '';
  presetList.forEach((img, idx) => {
    const btn = document.createElement('button');
    btn.id = `preset-img-btn-${idx}`;
    btn.className = 'aspect-square rounded-lg overflow-hidden border-2 transition-all relative group cursor-pointer';
    btn.title = `${img.label} - bởi ${img.credit}`;
    
    const isSelected = currentImageUrl === img.url;
    btn.style.borderColor = isSelected ? 'var(--accent)' : 'transparent';
    btn.style.transform = isSelected ? 'scale(0.95)' : 'none';

    btn.innerHTML = `<img src="${img.url}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />`;
    btn.onclick = () => {
      setPolaroidImage(img.url);
      renderPresetThumbnails(presetList);
    };
    presetThumbnailsContainer.appendChild(btn);
  });
}

function renderFilterButtons() {
  filterButtonsContainer.innerHTML = '';
  FILTER_PRESETS.forEach(filter => {
    const btn = document.createElement('button');
    btn.id = `filter-btn-${filter.id}`;
    btn.className = 'px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer';
    btn.textContent = filter.name;

    const isActive = currentImageFilter === filter.id;
    if (isActive) {
      btn.style.backgroundColor = 'var(--accent)';
      btn.style.color = 'var(--accent-text)';
      btn.style.borderColor = 'var(--accent)';
    } else {
      btn.style.backgroundColor = 'var(--bg-main)';
      btn.style.color = 'var(--text-main)';
      btn.style.borderColor = 'var(--border-color)';
    }

    btn.onclick = () => {
      currentImageFilter = filter.id;
      // Remove old filters
      polaroidImg.className = 'w-full h-full object-cover transition-all duration-500';
      // Apply new filter class
      polaroidImg.classList.add(`filter-${filter.id}`);
      renderFilterButtons();
    };

    filterButtonsContainer.appendChild(btn);
  });
}

// --- iTunes Music Engine with Dynamic Music Fetching ---
async function fetchThemeMusic(themeId, forcePlay = true, customQuery = null) {
  // REQUIREMENT: NO MUSIC OR QUOTES UNTIL IMAGE IS UPLOADED
  if (!currentImageUrl) {
    console.warn('Không có hình ảnh nào được chọn, bỏ qua tải nhạc.');
    return;
  }

  const config = THEME_CONFIGS[themeId];
  if (!config) return;

  musicLoader.classList.remove('hidden');
  musicLoader.classList.add('flex');
  musicDetails.classList.add('hidden');
  musicErrorMsg.classList.add('hidden');

  let query = "";
  if (customQuery && customQuery.trim()) {
    query = customQuery.trim();
  } else {
    if (themeId === 'theme1') {
      const queries = ['lofi chill việt nam', 'nhạc indie việt nhẹ nhàng', 'acoustic việt nam trending'];
      query = queries[Math.floor(Math.random() * queries.length)];
    } else if (themeId === 'theme2') {
      const queries = ['nhạc suy việt nam', 'r&b việt buồn', 'lofi buồn việt nam midnight'];
      query = queries[Math.floor(Math.random() * queries.length)];
    } else {
      const queries = ['nhạc remix tiktok việt nam', 'vietnamese rap trending', 'nhạc quẩy việt nam viral'];
      query = queries[Math.floor(Math.random() * queries.length)];
    }
  }

  // Update dynamic query display badge
  musicQueryTerm.textContent = query;

  try {
    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=50`;
    const response = await fetch(itunesUrl);
    if (!response.ok) {
      throw new Error('Cổng âm nhạc iTunes đang bận. Vui lòng thử lại sau.');
    }
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      trackList = data.results;
      // Choose a random track from the fetched tracks
      const selectedTrack = trackList[Math.floor(Math.random() * trackList.length)];
      playTrack(selectedTrack, forcePlay);
    } else {
      throw new Error(`Không tìm thấy nhạc cho từ khóa "${query}" trên iTunes.`);
    }
  } catch (err) {
    console.error('Lỗi iTunes:', err);
    musicErrorMsg.textContent = err.message || 'Kết nối iTunes API thất bại.';
    musicErrorMsg.classList.remove('hidden');
  } finally {
    musicLoader.classList.add('hidden');
    musicLoader.classList.remove('flex');
    if (!musicErrorMsg.classList.contains('hidden')) {
      musicDetails.classList.add('hidden');
    } else {
      musicDetails.classList.remove('hidden');
    }
  }
}

function playTrack(track, forcePlay = true) {
  currentTrack = track;
  songTitleArtist.innerHTML = `
    <i data-lucide="music" class="w-3.5 h-3.5 shrink-0" style="color: var(--text-muted);"></i>
    <span class="truncate">${track.trackName} - ${track.artistName}</span>
  `;
  songCollection.textContent = track.collectionName || 'Single';
  lucide.createIcons();

  // Configure Audio element
  audioEl.src = track.previewUrl;
  audioEl.volume = isMuted ? 0 : currentVolume;

  if (forcePlay || isPlaying) {
    isPlaying = true;
    audioEl.play().catch(err => {
      console.warn('Yêu cầu tự động phát bị trình duyệt chặn:', err);
      isPlaying = false;
      syncAudioUI();
    });
  } else {
    isPlaying = false;
  }
  syncAudioUI();
}

function syncAudioUI() {
  if (isPlaying) {
    vinylRecord.classList.remove('spin-vinyl-paused');
    tonearm.style.transform = 'rotate(22deg)';
    playBtnIcon.setAttribute('data-lucide', 'pause');
  } else {
    vinylRecord.classList.add('spin-vinyl-paused');
    tonearm.style.transform = 'rotate(0deg)';
    playBtnIcon.setAttribute('data-lucide', 'play');
  }
  lucide.createIcons();
}

// Helper to convert any image URL (remote or local object URL) to Base64
async function getImageBase64(url) {
  if (url.startsWith('data:')) {
    const match = url.match(/^data:([^;]+);base64,(.+)$/);
    if (match) {
      return { mime: match[1], data: match[2] };
    }
  }

  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        const data = base64String.split(',')[1];
        resolve({ mime: blob.type || 'image/jpeg', data });
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.warn('Fetch failed, trying canvas fallback:', err);
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || img.width;
          canvas.height = img.naturalHeight || img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/jpeg');
          const data = dataURL.split(',')[1];
          resolve({ mime: 'image/jpeg', data });
        } catch (canvasErr) {
          reject(canvasErr);
        }
      };
      img.onerror = () => reject(new Error('Không thể nạp ảnh để phân tích'));
      img.src = url;
    });
  }
}

// --- Gemini AI Poetry Rest Integration with Strict JSON Output Strategy ---
async function handleShuffleQuote() {
  // REQUIREMENT: NO MUSIC OR QUOTES UNTIL IMAGE IS UPLOADED
  if (!currentImageUrl) {
    showNotification('⚠️ Vui lòng thêm ảnh trước!');
    return;
  }

  // REQUIREMENT 2: DYNAMIC API KEY FETCHING DIRECTLY FROM DOM INPUT
  const userApiKey = document.getElementById('gemini-key-input').value.trim();
  if (!userApiKey) {
    alert("Vui lòng nhập Gemini API Key vào ô Cấu hình ở góc trên bạn nhé! ✨");
    quoteText.innerHTML = "⚠️ Bạn ơi! Vui lòng điền 'Gemini API Key' ở thanh cấu hình phía trên trước để trải nghiệm làm thơ GenZ xịn sò của Gemini nhé!";
    showNotification('Vui lòng cung cấp Gemini API Key!');
    return; // Stop execution
  }

  quoteLoader.classList.remove('hidden');
  quoteLoader.classList.add('flex');
  quoteDisplayContainer.classList.add('hidden');
  quoteShuffleBtn.disabled = true;

  // REQUIREMENT 3: JSON PROMPT REINFORCEMENT
  const systemInstruction = `Bạn là một GenZ Việt Nam sành điệu, chúa tể chơi chữ, tự chữa lành hoặc overthinking hoặc vô tri tùy theo vibe của chủ đề được yêu cầu.
Hãy phân tích bức ảnh và trả về DUY NHẤT một đối tượng JSON thô (raw JSON) tuân thủ hoàn chỉnh cấu trúc sau, KHÔNG sử dụng ký tự bao bọc mã nguồn markdown (như \`\`\`json hoặc \`\`\`), KHÔNG có văn bản thừa ngoài JSON:
{
  "quoteVN": "Lời tự sự chính tiếng Việt giàu chất thơ/vibe ở đây",
  "captionVN": "Lời chú thích phụ tiếng Việt ở đây",
  "quoteEN": "English translated quote here",
  "captionEN": "English translated sub-caption here",
  "musicQuery": "A short 2-3 word query for iTunes based on the image content and vibe"
}`;

  let themeInstruction = "";
  if (currentThemeId === 'theme1') {
    // Theme 1 MUST be pure healing/self-love (strictly NO romance/relationship topics)
    themeInstruction = `Vibe: Tĩnh tâm, tự chữa lành, yêu bản thân, chill một mình, ngoan xinh yêu. TUYỆT ĐỐI KHÔNG thả thính, KHÔNG nhắc đến tình yêu lứa đôi. Trả về JSON. Tự động dịch sang Tiếng Anh. musicQuery: Tạo 1 từ khóa tiếng Việt ngắn gọn để tìm nhạc chill trên iTunes (VD: lofi acoustic, piano nhẹ nhàng, indie việt chill) dựa trên ĐÚNG nội dung bức ảnh.`;
  } else if (currentThemeId === 'theme2') {
    // Theme 2 deep/overthinking
    themeInstruction = `Vibe: Suy, overthinking 2h sáng, cô đơn thao thức. Trả về JSON. Tự động dịch Tiếng Anh. musicQuery: Tạo 1 từ khóa tìm nhạc (VD: nhạc suy việt nam, lofi buồn) khớp với bức ảnh.`;
  } else {
    // Theme 3 GenZ rage bait/sarcasm
    themeInstruction = `Vibe: Cọc cằn sương sương, vô tri, mỏ hỗn, flex, châm biếm deadline. Trả về JSON. Tự động dịch Tiếng Anh (dùng English GenZ slang). musicQuery: Tạo từ khóa tìm nhạc bốc, quẩy, hài hước (VD: rap việt remix, edm tiktok) khớp với bức ảnh.`;
  }

  const promptText = `${systemInstruction}\n\nYêu cầu chủ đề:\n${themeInstruction}`;

  let musicFetched = false;

  try {
    // 1. Process the image (Base64)
    const imgData = await getImageBase64(currentImageUrl);

    // 2. Perform multimodal fetch call to Gemini 3.5 Flash using dynamic key
    const restEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${userApiKey}`;
    const response = await fetch(restEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: promptText },
              {
                inlineData: {
                  mimeType: imgData.mime,
                  data: imgData.data
                }
              }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(errorBody?.error?.message || `Lỗi máy chủ (${response.status})`);
    }

    const responseData = await response.json();
    
    // REQUIREMENT 1: BULLETPROOF JSON PARSING
    let rawText = responseData.candidates[0].content.parts[0].text;
    // Remove markdown formatting completely before parsing
    rawText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    const vibeData = cleanAndParseJSON(rawText);

    if (vibeData && vibeData.quoteVN) {
      // REQUIREMENT 4: SAFE UI UPDATES
      renderQuoteText(vibeData);
      showNotification('✨ Đã làm mới thơ song ngữ & tìm nhạc phù hợp!');
      
      // Only trigger fetchMusic after parsing is successful
      const queryFromGemini = vibeData.musicQuery || "";
      fetchThemeMusic(currentThemeId, true, queryFromGemini);
      musicFetched = true;
    } else {
      throw new Error('Định dạng phản hồi không hợp lệ.');
    }
  } catch (err) {
    console.error('Lỗi Gemini Multimodal:', err);
    quoteText.innerHTML = `⚠️ Lỗi rồi: ${err.message || 'Mạng yếu'}. Hãy kiểm tra lại API Key hoặc mạng nha bạn ơi!`;
  } finally {
    quoteLoader.classList.add('hidden');
    quoteLoader.classList.remove('flex');
    quoteDisplayContainer.classList.remove('hidden');
    quoteShuffleBtn.disabled = false;
    
    // Fallback if music query from Gemini was not successfully processed
    if (!musicFetched) {
      fetchThemeMusic(currentThemeId, true);
    }
  }
}

// --- Credentials Actions ---
function updateKeyStatusDisplay() {
  const activeKey = geminiApiKey.trim();

  if (activeKey) {
    keyStatusMsg.className = 'text-[10px] font-mono text-emerald-500 flex items-center gap-1 mt-1';
    keyStatusMsg.innerHTML = '<i data-lucide="check" class="w-3 h-3"></i><span>Đã sẵn sàng kết nối Gemini Key của bạn thành công!</span>';
  } else {
    keyStatusMsg.className = 'text-[10px] font-mono text-amber-500 flex items-center gap-1 mt-1';
    keyStatusMsg.innerHTML = '<i data-lucide="info" class="w-3 h-3"></i><span>Chưa lưu cấu hình Key (đang dùng mặc định offline).</span>';
  }
  lucide.createIcons();
}

// --- Saved Journal Rendering ---
function renderSavedEntries() {
  savedEntriesList.innerHTML = '';
  savedCountBadge.textContent = `${savedEntries.length} ký ức`;

  if (savedEntries.length === 0) {
    emptyFeedPlaceholder.classList.remove('hidden');
    return;
  }

  emptyFeedPlaceholder.classList.add('hidden');

  savedEntries.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'p-3 rounded-xl border flex gap-3 items-center justify-between transition-all hover:scale-[1.01] shadow-xs cursor-pointer';
    item.style.backgroundColor = 'var(--panel-bg)';
    item.style.borderColor = 'var(--border-color)';

    item.onclick = (e) => {
      if (e.target.closest('.delete-entry-btn')) return;
      loadJournalEntry(entry);
    };

    const filterClass = `filter-${entry.imageFilter || 'normal'}`;

    // Display subtext safely in list without html structures
    let cleanQuoteForList = '';
    if (entry.quote) {
      if (entry.quote.trim().startsWith('{')) {
        try {
          const parsed = JSON.parse(entry.quote);
          cleanQuoteForList = parsed.quoteVN || '';
        } catch (e) {
          cleanQuoteForList = entry.quote;
        }
      } else {
        cleanQuoteForList = entry.quote;
      }
    }
    cleanQuoteForList = cleanQuoteForList.replace(/<[^>]*>/g, ' ').replace(/["']/g, '').trim();

    item.innerHTML = `
      <div class="flex items-center gap-3 overflow-hidden flex-1">
        <!-- Thumbnail -->
        <div class="w-10 h-10 rounded-md overflow-hidden bg-stone-100 shrink-0 border border-stone-200/50">
          <img src="${entry.imageUrl}" class="w-full h-full object-cover ${filterClass}" />
        </div>
        <!-- Meta -->
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-xs truncate" style="color: var(--text-main);">${entry.title}</h4>
          <p class="text-[9px] font-mono tracking-wide" style="color: var(--text-muted);">${entry.date} • ${entry.time}</p>
          <p class="text-[9px] truncate" style="color: var(--text-muted);">${cleanQuoteForList}</p>
          ${entry.trackName ? `
            <span class="inline-flex items-center gap-1 text-[8px] font-mono mt-0.5" style="color: var(--accent);">
              <i data-lucide="disc" class="w-2.5 h-2.5 animate-spin"></i>
              ${entry.trackName}
            </span>
          ` : ''}
        </div>
      </div>
      <!-- Actions -->
      <button class="delete-entry-btn p-1.5 hover:bg-black/5 rounded-lg text-red-500 cursor-pointer shrink-0" title="Xóa kỷ niệm">
        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
      </button>
    `;

    // Hook delete trigger
    const deleteBtn = item.querySelector('.delete-entry-btn');
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteJournalEntry(entry.id);
    };

    savedEntriesList.appendChild(item);
  });
  lucide.createIcons();
}

function loadJournalEntry(entry) {
  journalTitleInput.value = entry.title;
  journalContentInput.value = entry.content;
  
  // Restore dual-line layout quote text via standard parser
  renderQuoteText(entry.quote);
  
  setPolaroidImage(entry.imageUrl);
  
  currentImageFilter = entry.imageFilter || 'normal';
  polaroidImg.className = 'w-full h-full object-cover transition-all duration-500';
  polaroidImg.classList.add(`filter-${currentImageFilter}`);

  stampDateEl.textContent = entry.date;
  stampTimeEl.textContent = entry.time;

  // Restore Theme Layout
  applyTheme(entry.themeId, true);

  showNotification(`📖 Đã phục dựng ký ức: "${entry.title}"`);
}

// Ensure deletion is robust
function deleteJournalEntry(id) {
  savedEntries = savedEntries.filter(e => e.id !== id);
  localStorage.setItem('vibe_journal_entries', JSON.stringify(savedEntries));
  renderSavedEntries();
  showNotification('🗑️ Đã xóa ký ức.');
}

function handleSaveEntry() {
  const title = journalTitleInput.value.trim();
  const content = journalContentInput.value.trim();

  if (!title && !content) {
    showNotification('⚠️ Vui lòng viết tựa đề hoặc nội dung trước khi lưu!');
    return;
  }

  const newEntry = {
    id: Date.now().toString(),
    title: title || 'Kỷ niệm tĩnh lặng',
    content: content,
    quote: currentQuoteRawText, // Save the raw JSON string for robust formatting retrieval later
    imageUrl: currentImageUrl,
    imageFilter: currentImageFilter,
    themeId: currentThemeId,
    date: dateStr,
    time: timeStr,
    trackName: currentTrack ? currentTrack.trackName : null,
    artistName: currentTrack ? currentTrack.artistName : null
  };

  savedEntries = [newEntry, ...savedEntries];
  localStorage.setItem('vibe_journal_entries', JSON.stringify(savedEntries));
  renderSavedEntries();
  
  // Clear form inputs
  journalTitleInput.value = '';
  journalContentInput.value = '';

  showNotification('💾 Đã lưu giữ ký ức thành công!');
}

function handleResetForm() {
  journalTitleInput.value = '';
  journalContentInput.value = '';
  showNotification('🧹 Đã làm sạch trang viết!');
}

// --- Setup All Listeners ---
function setupEventListeners() {
  // Theme selects
  document.getElementById('theme-select-theme1').onclick = () => {
    if (!currentImageUrl) {
      showNotification('⚠️ Vui lòng thêm ảnh trước!');
      return;
    }
    applyTheme('theme1', true);
    showNotification('Đã kích hoạt Vibe Chữa Lành 🌿');
  };
  document.getElementById('theme-select-theme2').onclick = () => {
    if (!currentImageUrl) {
      showNotification('⚠️ Vui lòng thêm ảnh trước!');
      return;
    }
    applyTheme('theme2', true);
    showNotification('Đã kích hoạt Vibe Deep & Hoài Niệm 🌌');
  };
  document.getElementById('theme-select-theme3').onclick = () => {
    if (!currentImageUrl) {
      showNotification('⚠️ Vui lòng thêm ảnh trước!');
      return;
    }
    applyTheme('theme3', true);
    showNotification('Đã kích hoạt Vibe Hài Hước GenZ 💥');
  };

  // Keyboard hotkeys
  window.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    if (activeEl && (
      activeEl.tagName === 'INPUT' || 
      activeEl.tagName === 'TEXTAREA' || 
      activeEl.getAttribute('contenteditable') === 'true'
    )) {
      return;
    }

    if (e.key === '1') {
      if (!currentImageUrl) {
        showNotification('⚠️ Vui lòng thêm ảnh trước!');
        return;
      }
      applyTheme('theme1', true);
      showNotification('Đã kích hoạt Vibe Chữa Lành 🌿 (Phím 1)');
    } else if (e.key === '2') {
      if (!currentImageUrl) {
        showNotification('⚠️ Vui lòng thêm ảnh trước!');
        return;
      }
      applyTheme('theme2', true);
      showNotification('Đã kích hoạt Vibe Deep & Hoài Niệm 🌌 (Phím 2)');
    } else if (e.key === '3') {
      if (!currentImageUrl) {
        showNotification('⚠️ Vui lòng thêm ảnh trước!');
        return;
      }
      applyTheme('theme3', true);
      showNotification('Đã kích hoạt Vibe Hài Hước GenZ 💥 (Phím 3)');
    }
  });

  // Config toggling
  toggleConfigBtn.onclick = () => {
    const isHidden = configPanelContent.classList.contains('hidden');
    if (isHidden) {
      configPanelContent.classList.remove('hidden');
      configChevron.style.transform = 'rotate(180deg)';
    } else {
      configPanelContent.classList.add('hidden');
      configChevron.style.transform = 'rotate(0deg)';
    }
  };

  // Credentials storage
  saveKeyBtn.onclick = () => {
    const keyVal = geminiKeyInput.value.trim();
    geminiApiKey = keyVal;
    localStorage.setItem('gemini_api_key', keyVal);
    updateKeyStatusDisplay();
    showNotification('🔑 Đã lưu trữ Gemini API Key!');
  };

  // Collapsible custom image panel
  toggleUrlInputBtn.onclick = () => {
    const isHidden = urlInputPanel.classList.contains('hidden');
    if (isHidden) {
      urlInputPanel.classList.remove('hidden');
    } else {
      urlInputPanel.classList.add('hidden');
    }
  };

  // Click on drag & drop zone triggers hidden file input
  imageDragDropZone.onclick = () => {
    localImageInput.click();
  };

  // Handle selected local image file
  localImageInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageFile(file);
    }
  };

  // Prevent default behaviors for drag-and-drop
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    imageDragDropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, false);
  });

  // Highlight drop zone on dragover/dragenter
  ['dragenter', 'dragover'].forEach(eventName => {
    imageDragDropZone.addEventListener(eventName, () => {
      imageDragDropZone.classList.add('bg-black/10');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    imageDragDropZone.addEventListener(eventName, () => {
      imageDragDropZone.classList.remove('bg-black/10');
    }, false);
  });

  // Handle dropped files
  imageDragDropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const file = dt.files[0];
    if (file) {
      handleImageFile(file);
    }
  });

  // Save Custom URL Image
  saveImageUrlBtn.onclick = () => {
    const customUrl = customImageUrlInput.value.trim();
    if (customUrl) {
      setPolaroidImage(customUrl);
      customImageUrlInput.value = '';
      urlInputPanel.classList.add('hidden');
      showNotification('📸 Đã nạp thành công liên kết ảnh mới!');
      // Update preset highlights (deselect previous)
      const currentTheme = THEME_CONFIGS[currentThemeId];
      renderPresetThumbnails(currentTheme.presetImages);
    }
  };

  // Play Pause Music Control
  musicPlayBtn.onclick = () => {
    if (!currentImageUrl) {
      showNotification('⚠️ Vui lòng thêm ảnh trước!');
      return;
    }
    if (!audioEl.src) return;
    
    if (isPlaying) {
      audioEl.pause();
      isPlaying = false;
    } else {
      audioEl.play().catch(err => {
        console.warn('Lỗi kích hoạt phát nhạc:', err);
        isPlaying = false;
      });
      isPlaying = true;
    }
    syncAudioUI();
  };

  // Skip random music
  musicNextBtn.onclick = () => {
    if (!currentImageUrl) {
      showNotification('⚠️ Vui lòng thêm ảnh trước!');
      return;
    }
    if (trackList.length > 0) {
      const selectedTrack = trackList[Math.floor(Math.random() * trackList.length)];
      playTrack(selectedTrack, true);
      showNotification('⏭️ Đã chuyển ngẫu nhiên bài khác từ iTunes!');
    } else {
      // Check query from current quote if parsed
      let queryVal = null;
      try {
        const parsed = JSON.parse(currentQuoteRawText);
        queryVal = parsed.musicQuery;
      } catch(e) {}
      fetchThemeMusic(currentThemeId, true, queryVal);
    }
  };

  // Volume slider and mute button
  musicVolumeSlider.oninput = (e) => {
    const val = parseFloat(e.target.value);
    currentVolume = val;
    if (isMuted) {
      isMuted = false;
      muteBtnIcon.setAttribute('data-lucide', 'volume-2');
    }
    audioEl.volume = val;
    lucide.createIcons();
  };

  musicMuteBtn.onclick = () => {
    if (isMuted) {
      isMuted = false;
      audioEl.volume = currentVolume;
      muteBtnIcon.setAttribute('data-lucide', 'volume-2');
    } else {
      isMuted = true;
      audioEl.volume = 0;
      muteBtnIcon.setAttribute('data-lucide', 'volume-x');
    }
    lucide.createIcons();
  };

  // Quote shuffling
  quoteShuffleBtn.onclick = () => {
    handleShuffleQuote();
  };

  // Form saving and clearing
  saveJournalBtn.onclick = () => {
    handleSaveEntry();
  };

  resetFormBtn.onclick = () => {
    handleResetForm();
  };
}
