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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded "><a href="contribution-guide/index.html"><strong aria-hidden="true">1.</strong> Contribution Guide</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contribution-guide/COMMIT-STRATEGY.html"><strong aria-hidden="true">1.1.</strong> Commit Strategy</a></li><li class="chapter-item expanded "><a href="contribution-guide/CONTRIBUTING.html"><strong aria-hidden="true">1.2.</strong> Contributing</a></li><li class="chapter-item expanded "><a href="contribution-guide/NO-CODE.html"><strong aria-hidden="true">1.3.</strong> No Code</a></li><li class="chapter-item expanded "><a href="contribution-guide/PR.html"><strong aria-hidden="true">1.4.</strong> Pr</a></li><li class="chapter-item expanded "><a href="contribution-guide/TECH-STACK.html"><strong aria-hidden="true">1.5.</strong> Tech Stack</a></li><li class="chapter-item expanded "><a href="contribution-guide/contributors.html"><strong aria-hidden="true">1.6.</strong> Contributors</a></li></ol></li><li class="chapter-item expanded "><a href="interview-qna/index.html"><strong aria-hidden="true">2.</strong> Interview Qna</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interview-qna/class-wise/index.html"><strong aria-hidden="true">2.1.</strong> Class Wise</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interview-qna/class-wise/class-15.html"><strong aria-hidden="true">2.1.1.</strong> Class 15</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/series.html"><strong aria-hidden="true">2.1.2.</strong> Series</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang016-package-scope/index.html"><strong aria-hidden="true">2.1.3.</strong> Golang016 Package Scope</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang017-scope-example/index.html"><strong aria-hidden="true">2.1.4.</strong> Golang017 Scope Example</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang018-variable-shadowing/index.html"><strong aria-hidden="true">2.1.5.</strong> Golang018 Variable Shadowing</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang019-function-types/index.html"><strong aria-hidden="true">2.1.6.</strong> Golang019 Function Types</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang020-init-function/index.html"><strong aria-hidden="true">2.1.7.</strong> Golang020 Init Function</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang021-anonymous-func-and-iife/index.html"><strong aria-hidden="true">2.1.8.</strong> Golang021 Anonymous Func And Iife</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang022-function-expression-example/index.html"><strong aria-hidden="true">2.1.9.</strong> Golang022 Function Expression Example</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang023-fof-vs-hof/index.html"><strong aria-hidden="true">2.1.10.</strong> Golang023 Fof Vs Hof</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang024-internal-memory/index.html"><strong aria-hidden="true">2.1.11.</strong> Golang024 Internal Memory</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang025-end_of_internal-memory/index.html"><strong aria-hidden="true">2.1.12.</strong> Golang025 End Of Internal Memory</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang026-closure/index.html"><strong aria-hidden="true">2.1.13.</strong> Golang026 Closure</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang027-struct/index.html"><strong aria-hidden="true">2.1.14.</strong> Golang027 Struct</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang028-receiver-function/index.html"><strong aria-hidden="true">2.1.15.</strong> Golang028 Receiver Function</a></li><li class="chapter-item expanded "><a href="interview-qna/class-wise/golang029-array/index.html"><strong aria-hidden="true">2.1.16.</strong> Golang029 Array</a></li></ol></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/index.html"><strong aria-hidden="true">2.2.</strong> Topic Wise</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interview-qna/topic-wise/array.html"><strong aria-hidden="true">2.2.1.</strong> Array</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/boolean.html"><strong aria-hidden="true">2.2.2.</strong> Boolean</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/callback-func.html"><strong aria-hidden="true">2.2.3.</strong> Callback Func</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/closures.html"><strong aria-hidden="true">2.2.4.</strong> Closures</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/comparison-operator.html"><strong aria-hidden="true">2.2.5.</strong> Comparison Operator</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/conditional-statement.html"><strong aria-hidden="true">2.2.6.</strong> Conditional Statement</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/constant.html"><strong aria-hidden="true">2.2.7.</strong> Constant</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/defer.html"><strong aria-hidden="true">2.2.8.</strong> Defer</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/higher&first-order-func.html"><strong aria-hidden="true">2.2.9.</strong> Higher&amp;first Order Func</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/iife-func.html"><strong aria-hidden="true">2.2.10.</strong> Iife Func</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/internal-memory.html"><strong aria-hidden="true">2.2.11.</strong> Internal Memory</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/logical-operator.html"><strong aria-hidden="true">2.2.12.</strong> Logical Operator</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/loops.html"><strong aria-hidden="true">2.2.13.</strong> Loops</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/maps.html"><strong aria-hidden="true">2.2.14.</strong> Maps</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/numbers.html"><strong aria-hidden="true">2.2.15.</strong> Numbers</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/parameter-argument.html"><strong aria-hidden="true">2.2.16.</strong> Parameter Argument</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/receiver-function.html"><strong aria-hidden="true">2.2.17.</strong> Receiver Function</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/scope.html"><strong aria-hidden="true">2.2.18.</strong> Scope</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/slice.html"><strong aria-hidden="true">2.2.19.</strong> Slice</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/string.html"><strong aria-hidden="true">2.2.20.</strong> String</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/struct.html"><strong aria-hidden="true">2.2.21.</strong> Struct</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/switch-statement.html"><strong aria-hidden="true">2.2.22.</strong> Switch Statement</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/variable.html"><strong aria-hidden="true">2.2.23.</strong> Variable</a></li><li class="chapter-item expanded "><a href="interview-qna/topic-wise/variadict-function.html"><strong aria-hidden="true">2.2.24.</strong> Variadict Function</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="landing-page/index.html"><strong aria-hidden="true">3.</strong> Landing Page</a></li><li class="chapter-item expanded "><a href="link-resources/index.html"><strong aria-hidden="true">4.</strong> Link Resources</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="link-resources/Problems/index.html"><strong aria-hidden="true">4.1.</strong> Problems</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="link-resources/Problems/CF/index.html"><strong aria-hidden="true">4.1.1.</strong> Cf</a></li><li class="chapter-item expanded "><a href="link-resources/Problems/LeetCode/index.html"><strong aria-hidden="true">4.1.2.</strong> Leetcode</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="mini-projects/index.html"><strong aria-hidden="true">5.</strong> Mini Projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="mini-projects/1-cards/index.html"><strong aria-hidden="true">5.1.</strong> 1 Cards</a></li><li class="chapter-item expanded "><a href="mini-projects/Quantique/index.html"><strong aria-hidden="true">5.2.</strong> Quantique</a></li><li class="chapter-item expanded "><a href="mini-projects/ccwc/index.html"><strong aria-hidden="true">5.3.</strong> Ccwc</a></li></ol></li><li class="chapter-item expanded "><a href="rbac/index.html"><strong aria-hidden="true">6.</strong> Rbac</a></li></ol>';
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
