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
    searchTerm: 'lofi viet nam chill',
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
    searchTerm: 'indie nhẹ nhàng viet nam',
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
    searchTerm: 'nhạc remix viet nam tiktok',
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

  // Load Theme 1
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

// --- Theme Management ---
function applyTheme(themeId, autoPlayMusic = true) {
  currentThemeId = themeId;
  const vars = THEME_CONFIGS[themeId];
  if (!vars) return;

  // Sync Global CSS variables
  const root = document.documentElement;
  root.style.setProperty('--bg-main', vars.bgMain);
  root.style.setProperty('--text-main', vars.textMain);
  root.style.setProperty('--text-muted', vars.textMuted);
  root.style.setProperty('--panel-bg', vars.panelBg);
  root.style.setProperty('--border-color', vars.borderColor);
  root.style.setProperty('--accent', vars.accent);
  root.style.setProperty('--accent-text', vars.accentText);

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

  // Load theme preset image
  setPolaroidImage(vars.presetImages[0].url);

  // Set default theme quote
  if (themeId === 'theme1') {
    quoteText.textContent = "Bão giông ngoài cửa kệ nó, bên ly cà phê sữa đá ta tự chữa lành. ☕🌿";
  } else if (themeId === 'theme2') {
    quoteText.textContent = "Mưa rơi ướt lối ta về, lòng buồn man mác chần chừ ngẩn ngơ... 🌧️🌌";
  } else {
    quoteText.textContent = "Ủa alo? Không vô tri đời không nể nha quý dzị! Gấp đôi canxi đi nào! 💥😎";
  }

  // Sync Turntable labels
  vinylCenterImg.src = vars.vinylCenterImage;
  musicQueryTerm.textContent = vars.searchTerm;

  // Render Thumbnails of this Theme
  renderPresetThumbnails(vars.presetImages);

  // Render Filter Buttons (with correct accent highlights)
  renderFilterButtons();

  // Load corresponding iTunes Music List
  fetchThemeMusic(themeId, autoPlayMusic);
}

// --- Polaroid & Filters Rendering ---
function setPolaroidImage(url) {
  currentImageUrl = url;
  polaroidImg.src = url;
}

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

// --- iTunes Music Engine ---
async function fetchThemeMusic(themeId, forcePlay = true) {
  const config = THEME_CONFIGS[themeId];
  if (!config) return;

  musicLoader.classList.remove('hidden');
  musicLoader.classList.add('flex');
  musicDetails.classList.add('hidden');
  musicErrorMsg.classList.add('hidden');

  try {
    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(config.searchTerm)}&entity=song&limit=50`;
    const response = await fetch(itunesUrl);
    if (!response.ok) {
      throw new Error('Cổng âm nhạc iTunes đang bận. Vui lòng thử lại sau.');
    }
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      trackList = data.results;
      // Choose a random track
      const selectedTrack = trackList[Math.floor(Math.random() * trackList.length)];
      playTrack(selectedTrack, forcePlay);
    } else {
      throw new Error('Không tìm thấy nhạc tương ứng trên iTunes.');
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

// --- Gemini AI Poetry Rest Integration ---
async function handleShuffleQuote() {
  if (!geminiApiKey.trim()) {
    quoteText.innerHTML = "⚠️ Bạn ơi! Vui lòng điền 'Gemini API Key' ở thanh cấu hình phía trên trước để trải nghiệm làm thơ GenZ xịn sò của Gemini nhé!";
    showNotification('Vui lòng cung cấp Gemini API Key!');
    return;
  }

  quoteLoader.classList.remove('hidden');
  quoteLoader.classList.add('flex');
  quoteDisplayContainer.classList.add('hidden');
  quoteShuffleBtn.disabled = true;

  const currentTheme = THEME_CONFIGS[currentThemeId];
  const vibeText = currentTheme.vibe;
  const promptText = `Bạn là một Gen Z Việt Nam đam mê văn học. Hãy tạo ngẫu nhiên HOẶC là 1 câu quote (khoảng 5-10 chữ) HOẶC là 1 bài thơ (đúng 2 dòng). BẤT KỂ định dạng nào, nội dung BẮT BUỘC phải có vần điệu (gieo vần cuối hoặc vần lưng). Nội dung phải theo phong cách: [${vibeText}]. Bắt buộc dùng ngôn ngữ GenZ. Chỉ trả về văn bản kết quả, tuyệt đối không giải thích.`;

  try {
    const restEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
    const response = await fetch(restEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: promptText }]
          }
        ],
        generationConfig: {
          temperature: 0.9,
          maxOutputTokens: 120,
        }
      })
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(errorBody?.error?.message || `Lỗi máy chủ (${response.status})`);
    }

    const responseData = await response.json();
    const textResult = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (textResult) {
      quoteText.textContent = textResult.trim();
      showNotification('✨ Đã làm mới thơ vần điệu!');
    } else {
      throw new Error('Không thể tạo phản hồi từ mô hình.');
    }
  } catch (err) {
    console.error('Lỗi Gemini:', err);
    quoteText.innerHTML = `⚠️ Lỗi rồi: ${err.message || 'Mạng yếu'}. Hãy kiểm tra lại API Key hoặc mạng nha bạn ơi!`;
  } finally {
    quoteLoader.classList.add('hidden');
    quoteLoader.classList.remove('flex');
    quoteDisplayContainer.classList.remove('hidden');
    quoteShuffleBtn.disabled = false;
    
    // Concurrently shuffle background music on every quote rebuild as requested!
    fetchThemeMusic(currentThemeId, true);
  }
}

// --- Credentials Actions ---
function updateKeyStatusDisplay() {
  if (geminiApiKey.trim()) {
    keyStatusMsg.className = 'text-[10px] font-mono text-emerald-500 flex items-center gap-1 mt-1';
    keyStatusMsg.innerHTML = '<i data-lucide="check" class="w-3 h-3"></i><span>Đã lưu trữ Gemini Key của bạn thành công!</span>';
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

    // Restores past state on full block click
    item.onclick = (e) => {
      // Avoid loading if clicking trash button
      if (e.target.closest('.delete-entry-btn')) return;
      loadJournalEntry(entry);
    };

    const filterClass = `filter-${entry.imageFilter || 'normal'}`;

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
          <p class="text-[9px] truncate" style="color: var(--text-muted);">${entry.quote}</p>
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
  quoteText.textContent = entry.quote;
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
    quote: quoteText.textContent.trim(),
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
    applyTheme('theme1', true);
    showNotification('Đã kích hoạt Vibe Chữa Lành 🌿');
  };
  document.getElementById('theme-select-theme2').onclick = () => {
    applyTheme('theme2', true);
    showNotification('Đã kích hoạt Vibe Deep & Hoài Niệm 🌌');
  };
  document.getElementById('theme-select-theme3').onclick = () => {
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
      applyTheme('theme1', true);
      showNotification('Đã kích hoạt Vibe Chữa Lành 🌿 (Phím 1)');
    } else if (e.key === '2') {
      applyTheme('theme2', true);
      showNotification('Đã kích hoạt Vibe Deep & Hoài Niệm 🌌 (Phím 2)');
    } else if (e.key === '3') {
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
    if (trackList.length > 0) {
      const selectedTrack = trackList[Math.floor(Math.random() * trackList.length)];
      playTrack(selectedTrack, true);
      showNotification('⏭️ Đã chuyển ngẫu nhiên bài khác từ iTunes!');
    } else {
      fetchThemeMusic(currentThemeId, true);
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
