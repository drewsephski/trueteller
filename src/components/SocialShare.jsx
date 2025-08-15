import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import html2canvas from 'html2canvas';
import { 
  SOCIAL_TEMPLATES, 
  XP_REWARDS 
} from '../data/gamificationData';
import '../styles/SocialShare.css';

const SocialShare = ({ result, userName, onClose }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('DEFAULT');
  const [customMessage, setCustomMessage] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [shareCount, setShareCount] = useState(0);
  const resultRef = useRef(null);

  const generateShareText = () => {
    const template = SOCIAL_TEMPLATES[selectedTemplate];
    const url = window.location.origin;
    
    let shareText = template
      .replace('{personalityName}', result.name)
      .replace('{personalityCode}', result.code)
      .replace('{spiritAnimal}', result.spiritAnimal)
      .replace('{url}', url);
    
    if (customMessage) {
      shareText = `${customMessage}\n\n${shareText}`;
    }
    
    return shareText;
  };

  const copyToClipboard = async () => {
    const shareText = generateShareText();
    
    try {
      await navigator.clipboard.writeText(shareText);
      setShareCount(prev => prev + 1);
      // Show success feedback
      const button = event.target;
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      button.style.background = '#4CAF50';
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareOnTwitter = () => {
    const shareText = generateShareText();
    const url = window.location.origin;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    setShareCount(prev => prev + 1);
  };

  const shareOnFacebook = () => {
    const url = window.location.origin;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    setShareCount(prev => prev + 1);
  };

  const shareOnWhatsApp = () => {
    const shareText = generateShareText();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
    setShareCount(prev => prev + 1);
  };

  const downloadResultImage = async () => {
    if (!resultRef.current) return;
    
    setIsGeneratingImage(true);
    
    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
      });
      
      const link = document.createElement('a');
      link.download = `trueyouteller-result-${result.code}.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      setShareCount(prev => prev + 1);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const shareViaEmail = () => {
    const shareText = generateShareText();
    const subject = `Check out my personality result from TrueYouTeller!`;
    const body = `${shareText}\n\nSent from TrueYouTeller - Discover your true self!`;
    const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    setShareCount(prev => prev + 1);
  };

  const shareOptions = [
    {
      name: 'Twitter',
      icon: '🐦',
      action: shareOnTwitter,
      color: '#1DA1F2'
    },
    {
      name: 'Facebook',
      icon: '📘',
      action: shareOnFacebook,
      color: '#4267B2'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      action: shareOnWhatsApp,
      color: '#25D366'
    },
    {
      name: 'Email',
      icon: '📧',
      action: shareViaEmail,
      color: '#EA4335'
    }
  ];

  return (
    <div className="social-share-overlay">
      <div className="social-share-modal">
        <div className="modal-header">
          <h2>Share Your Results</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        
        <div className="share-content">
          <div className="result-preview" ref={resultRef}>
            <div className="result-card">
              <div className="result-header">
                <div className="personality-emoji">{result.emoji}</div>
                <div className="personality-info">
                  <h3>{result.name}</h3>
                  <p>{result.code}</p>
                </div>
              </div>
              
              <div className="result-spirit">
                <span className="spirit-label">Spirit Animal:</span>
                <span className="spirit-name">{result.spiritAnimal}</span>
              </div>
              
              <div className="result-description">
                {result.description}
              </div>
              
              <div className="result-footer">
                <div className="footer-text">
                  Discovered with TrueYouTeller
                </div>
                <div className="footer-logo">
                  🦉
                </div>
              </div>
            </div>
          </div>
          
          <div className="share-options">
            <div className="template-selector">
              <label htmlFor="template-select">Choose a template:</label>
              <select 
                id="template-select"
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="template-select"
              >
                <option value="DEFAULT">Default</option>
                <option value="FUNNY">Funny</option>
                <option value="INSPIRATIONAL">Inspirational</option>
                <option value="MYSTERIOUS">Mysterious</option>
                <option value="PROUD">Proud</option>
                <option value="THOUGHTFUL">Thoughtful</option>
              </select>
            </div>
            
            <div className="custom-message">
              <label htmlFor="custom-text">Custom message (optional):</label>
              <textarea
                id="custom-text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Add your personal touch..."
                className="custom-textarea"
                rows={3}
              />
            </div>
            
            <div className="share-preview">
              <label>Preview:</label>
              <div className="preview-text">
                {generateShareText()}
              </div>
            </div>
            
            <div className="share-actions">
              <button 
                className="action-button primary"
                onClick={copyToClipboard}
              >
                📋 Copy to Clipboard
              </button>
              
              <button 
                className="action-button secondary"
                onClick={downloadResultImage}
                disabled={isGeneratingImage}
              >
                {isGeneratingImage ? '⏳ Generating...' : '📷 Download Image'}
              </button>
            </div>
            
            <div className="social-platforms">
              <h4>Share on social media:</h4>
              <div className="platform-buttons">
                {shareOptions.map((platform) => (
                  <button
                    key={platform.name}
                    className="platform-button"
                    onClick={platform.action}
                    style={{ backgroundColor: platform.color }}
                  >
                    <span className="platform-icon">{platform.icon}</span>
                    <span className="platform-name">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="share-stats">
          <div className="stat-item">
            <span className="stat-icon">🔗</span>
            <span className="stat-text">Shared {shareCount} time{shareCount !== 1 ? 's' : ''}</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-text">+{XP_REWARDS.SHARE_RESULT} XP per share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;