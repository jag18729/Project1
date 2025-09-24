// Copy to clipboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(function(pre) {
        // Create wrapper div
        const wrapper = document.createElement('div');
        wrapper.className = 'code-container';

        // Insert wrapper before pre element
        pre.parentNode.insertBefore(wrapper, pre);

        // Move pre into wrapper
        wrapper.appendChild(pre);

        // Create copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = `
            <span class="copy-icon">📋</span>
            <span class="check-icon">✓</span>
            <span class="btn-text">Copy</span>
        `;

        // Add click event
        copyBtn.addEventListener('click', function() {
            const code = pre.querySelector('code');
            const text = code ? code.textContent : pre.textContent;

            // Copy to clipboard
            navigator.clipboard.writeText(text).then(function() {
                // Show success state
                copyBtn.classList.add('copied');
                copyBtn.querySelector('.btn-text').textContent = 'Copied!';

                // Reset after 2 seconds
                setTimeout(function() {
                    copyBtn.classList.remove('copied');
                    copyBtn.querySelector('.btn-text').textContent = 'Copy';
                }, 2000);
            }).catch(function(err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();

                try {
                    document.execCommand('copy');
                    copyBtn.classList.add('copied');
                    copyBtn.querySelector('.btn-text').textContent = 'Copied!';

                    setTimeout(function() {
                        copyBtn.classList.remove('copied');
                        copyBtn.querySelector('.btn-text').textContent = 'Copy';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }

                document.body.removeChild(textArea);
            });
        });

        // Add button to wrapper
        wrapper.appendChild(copyBtn);
    });

    // Add hover effect for code blocks
    const codeContainers = document.querySelectorAll('.code-container');

    codeContainers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            const btn = container.querySelector('.copy-btn');
            if (btn && !btn.classList.contains('copied')) {
                btn.style.opacity = '1';
            }
        });

        container.addEventListener('mouseleave', function() {
            const btn = container.querySelector('.copy-btn');
            if (btn && !btn.classList.contains('copied')) {
                btn.style.opacity = '0.7';
            }
        });
    });
});

// Add smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Could add search functionality here
    }

    // Escape to close any modals (if implemented)
    if (e.key === 'Escape') {
        // Could add modal closing functionality here
    }
});

// Demonstrate reusing data element values
document.addEventListener('DOMContentLoaded', function() {
    // Get all data elements
    const dataElements = document.querySelectorAll('data[value]');

    // Log data values for demonstration (could be used for calculations)
    dataElements.forEach(function(element) {
        const value = element.getAttribute('value');
        const id = element.id;

        // Example: Add tooltips showing the data value
        if (id) {
            element.title = `Data value: ${value}`;
            element.style.cursor = 'help';
        }
    });

    // Example of reusing data values programmatically
    const osCount = document.querySelector('#os-count');
    const totalCommands = document.querySelector('#total-commands');

    if (osCount && totalCommands) {
        const avgCommandsPerOS = parseInt(totalCommands.getAttribute('value')) / parseInt(osCount.getAttribute('value'));
        console.log(`Average commands per OS: ${avgCommandsPerOS}`);
    }
});