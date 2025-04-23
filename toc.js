// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded "><a href="contribution-guide/index.html"><strong aria-hidden="true">1.</strong> Contribution Guide</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contribution-guide/COMMIT-STRATEGY.html"><strong aria-hidden="true">1.1.</strong> Commit Strategy</a></li><li class="chapter-item expanded "><a href="contribution-guide/CONTRIBUTING.html"><strong aria-hidden="true">1.2.</strong> Contributing</a></li><li class="chapter-item expanded "><a href="contribution-guide/NO-CODE.html"><strong aria-hidden="true">1.3.</strong> No Code</a></li><li class="chapter-item expanded "><a href="contribution-guide/PR.html"><strong aria-hidden="true">1.4.</strong> Pr</a></li><li class="chapter-item expanded "><a href="contribution-guide/TECH-STACK.html"><strong aria-hidden="true">1.5.</strong> Tech Stack</a></li><li class="chapter-item expanded "><a href="contribution-guide/contributors.html"><strong aria-hidden="true">1.6.</strong> Contributors</a></li></ol></li><li class="chapter-item expanded "><a href="interview-qna/index.html"><strong aria-hidden="true">2.</strong> Interview Qna</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> Class Wise</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="interview-qna/class-wise/class-15.html"><strong aria-hidden="true">2.1.1.</strong> Class 15</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/series.html"><strong aria-hidden="true">2.1.2.</strong> Series</a></li></ol></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/index.html"><strong aria-hidden="true">2.2.</strong> Topic Wise</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interview-qna/topic-wise/array.html"><strong aria-hidden="true">2.2.1.</strong> Array</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Boolean/index.html"><strong aria-hidden="true">2.2.2.</strong> Boolean</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/ComparisonOperators/index.html"><strong aria-hidden="true">2.2.3.</strong> Comparisonoperators</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/ConditionalStatement/index.html"><strong aria-hidden="true">2.2.4.</strong> Conditionalstatement</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Constant/index.html"><strong aria-hidden="true">2.2.5.</strong> Constant</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/For-Loop/index.html"><strong aria-hidden="true">2.2.6.</strong> For Loop</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Internal-Memory/index.html"><strong aria-hidden="true">2.2.7.</strong> Internal Memory</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/LogicalOperators/index.html"><strong aria-hidden="true">2.2.8.</strong> Logicaloperators</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/LoopInGolang/index.html"><strong aria-hidden="true">2.2.9.</strong> Loopingolang</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Maps/index.html"><strong aria-hidden="true">2.2.10.</strong> Maps</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Numbers/index.html"><strong aria-hidden="true">2.2.11.</strong> Numbers</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Slices/index.html"><strong aria-hidden="true">2.2.12.</strong> Slices</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Strings/index.html"><strong aria-hidden="true">2.2.13.</strong> Strings</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Structures/index.html"><strong aria-hidden="true">2.2.14.</strong> Structures</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/SwitchStatement/index.html"><strong aria-hidden="true">2.2.15.</strong> Switchstatement</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/Variable/index.html"><strong aria-hidden="true">2.2.16.</strong> Variable</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="landing-page/index.html"><strong aria-hidden="true">3.</strong> Landing Page</a></li><li class="chapter-item expanded "><a href="link-resources/index.html"><strong aria-hidden="true">4.</strong> Link Resources</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="link-resources/Problems/index.html"><strong aria-hidden="true">4.1.</strong> Problems</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="link-resources/Problems/CF/index.html"><strong aria-hidden="true">4.1.1.</strong> Cf</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="mini-projects/index.html"><strong aria-hidden="true">5.</strong> Mini Projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="mini-projects/1-cards/index.html"><strong aria-hidden="true">5.1.</strong> 1 Cards</a></li><li class="chapter-item expanded "><a href="mini-projects/ccwc/index.html"><strong aria-hidden="true">5.2.</strong> Ccwc</a></li></ol></li><li class="chapter-item expanded "><a href="rbac/index.html"><strong aria-hidden="true">6.</strong> Rbac</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
