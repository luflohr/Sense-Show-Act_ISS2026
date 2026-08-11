(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Copy submission email to clipboard
  var emailChip = document.getElementById("emailChip");
  var emailChipAction = document.getElementById("emailChipAction");

  if (emailChip && emailChipAction) {
    emailChip.addEventListener("click", function () {
      var email = emailChip.getAttribute("data-email") || "";
      var resetLabel = "Copy";

      function showCopied() {
        emailChipAction.textContent = "Copied";
        setTimeout(function () {
          emailChipAction.textContent = resetLabel;
        }, 1800);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied, function () {
          emailChipAction.textContent = "Select & copy";
        });
      } else {
        emailChipAction.textContent = "Select & copy";
      }
    });
  }
})();
