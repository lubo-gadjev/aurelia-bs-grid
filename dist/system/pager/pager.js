System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, customElement, Pager;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
    }],
    execute: function () {
      Pager = (function () {
        var _instanceInitializers = {};

        function Pager() {
          _classCallCheck(this, _Pager);

          _defineDecoratedPropertyDescriptor(this, 'onPageChanged', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'numToShow', _instanceInitializers);

          this.nextDisabled = false;
          this.prevDisabled = false;

          _defineDecoratedPropertyDescriptor(this, 'showFirstLastButtons', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showJumpButtons', _instanceInitializers);

          this.page = 1;
          this.pageCount = 0;
          this.pages = [];
        }

        _createDecoratedClass(Pager, [{
          key: 'changePage',
          value: function changePage(page) {

            var oldPage = this.page;

            this.page = this.cap(page);

            if (oldPage !== this.page) {
              this.onPageChanged(this.page);
            }
          }
        }, {
          key: 'update',
          value: function update(page, pagesize, totalItems) {
            this.page = page;
            this.totalItems = totalItems;
            this.pageSize = pagesize;

            this.createPages();
          }
        }, {
          key: 'cap',
          value: function cap(page) {
            if (page < 1) return 1;
            if (page > this.pageCount) return this.pageCount;

            return page;
          }
        }, {
          key: 'createPages',
          value: function createPages() {
            this.pageCount = Math.ceil(this.totalItems / this.pageSize);

            var numToRender = this.pageCount < this.numToShow ? this.pageCount : this.numToShow;

            var indicatorPosition = Math.ceil(numToRender / 2);

            var firstPageNumber = this.page - indicatorPosition + 1;

            if (firstPageNumber < 1) firstPageNumber = 1;

            var lastPageNumber = firstPageNumber + numToRender - 1;

            if (lastPageNumber > this.pageCount) {
              var dif = this.pageCount - lastPageNumber;

              firstPageNumber += dif;
              lastPageNumber += dif;
            }

            var pages = [];

            for (var i = firstPageNumber; i <= lastPageNumber; i++) {
              pages.push(i);
            }
            ;

            this.pages = pages;

            this.updateButtons();
          }
        }, {
          key: 'updateButtons',
          value: function updateButtons() {
            this.nextDisabled = this.page === this.pageCount;
            this.prevDisabled = this.page === 1;
          }
        }, {
          key: 'next',
          value: function next() {
            this.changePage(this.page + 1);
          }
        }, {
          key: 'nextJump',
          value: function nextJump() {
            this.changePage(this.page + this.numToShow);
          }
        }, {
          key: 'prev',
          value: function prev() {
            this.changePage(this.page - 1);
          }
        }, {
          key: 'prevJump',
          value: function prevJump() {
            this.changePage(this.page - this.numToShow);
          }
        }, {
          key: 'first',
          value: function first() {
            this.changePage(1);
          }
        }, {
          key: 'last',
          value: function last() {
            this.changePage(this.pageCount);
          }
        }, {
          key: 'onPageChanged',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'numToShow',
          decorators: [bindable],
          initializer: function initializer() {
            return 5;
          },
          enumerable: true
        }, {
          key: 'showFirstLastButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'showJumpButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }], null, _instanceInitializers);

        var _Pager = Pager;
        Pager = customElement('pager')(Pager) || Pager;
        return Pager;
      })();

      _export('Pager', Pager);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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WSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO1dBQ3JDOzs7aUJBRUcsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQ2hDOzs7aUJBRU8sb0JBQUc7QUFDVCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztXQUM3Qzs7O2lCQUVHLGdCQUFHO0FBQ0wsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztXQUNoQzs7O2lCQUVPLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDN0M7OztpQkFFSSxpQkFBRztBQUNOLGdCQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQ3BCOzs7aUJBRUcsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDakM7Ozt1QkFySEEsUUFBUTs7Ozs7dUJBR1IsUUFBUTs7bUJBQWEsQ0FBQzs7Ozs7dUJBT3RCLFFBQVE7O21CQUF3QixJQUFJOzs7Ozt1QkFDcEMsUUFBUTs7bUJBQW1CLElBQUk7Ozs7O3FCQWRyQixLQUFLO0FBQUwsYUFBSyxHQURqQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQ1YsS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6InBhZ2VyL3BhZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdwYWdlcicpXHJcbmV4cG9ydCBjbGFzcyBQYWdlciB7XHJcblxyXG4gIC8vIENhbGxlZCB3aGVuIHRoZSBzZWxlY3RlZCBwYWdlIGNoYW5nZXNcclxuICBAYmluZGFibGUgb25QYWdlQ2hhbmdlZDtcclxuXHJcbiAgLy8gTWF4IG51bSBwYWdlcyB0byBzaG93XHJcbiAgQGJpbmRhYmxlIG51bVRvU2hvdyA9IDU7XHJcblxyXG4gIC8vIERpc2FibGUvZW5hYmxlXHJcbiAgbmV4dERpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJldkRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIC8vIFBhZ2VyIGJ1dHRvbiBvcHRpb25zXHJcbiAgQGJpbmRhYmxlIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcclxuICBAYmluZGFibGUgc2hvd0p1bXBCdXR0b25zID0gdHJ1ZTtcclxuXHJcbiAgLy8gVG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBkYXRhc2V0XHJcbiAgcGFnZSA9IDE7XHJcbiAgcGFnZUNvdW50ID0gMDtcclxuXHJcbiAgcGFnZXMgPSBbXTtcclxuXHJcbiAgY2hhbmdlUGFnZShwYWdlKSB7XHJcblxyXG4gICAgdmFyIG9sZFBhZ2UgPSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgdGhpcy5wYWdlID0gdGhpcy5jYXAocGFnZSk7XHJcblxyXG4gICAgaWYgKG9sZFBhZ2UgIT09IHRoaXMucGFnZSkge1xyXG4gICAgICB0aGlzLm9uUGFnZUNoYW5nZWQodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhbGxlZCB3aGVuIHRoZSBkYXRhIHNvdXJjZSBjaGFuZ2VzXHJcbiAgdXBkYXRlKHBhZ2UsIHBhZ2VzaXplLCB0b3RhbEl0ZW1zKSB7XHJcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gdG90YWxJdGVtcztcclxuICAgIHRoaXMucGFnZVNpemUgPSBwYWdlc2l6ZTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBjYXAocGFnZSkge1xyXG4gICAgaWYgKHBhZ2UgPCAxKSByZXR1cm4gMTtcclxuICAgIGlmIChwYWdlID4gdGhpcy5wYWdlQ291bnQpIHJldHVybiB0aGlzLnBhZ2VDb3VudDtcclxuXHJcbiAgICByZXR1cm4gcGFnZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2VzKCkge1xyXG5cclxuICAgIC8vIENhbGMgdGhlIG1heCBwYWdlIG51bWJlclxyXG4gICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5wYWdlU2l6ZSk7XHJcblxyXG4gICAgLy8gQ2FwIHRoZSBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyIGlmIHRoZSBjb3VudCBpcyBsZXNzIHRoYW4gbnVtYmVyIHRvIHNob3cgYXQgb25jZVxyXG4gICAgdmFyIG51bVRvUmVuZGVyID0gdGhpcy5wYWdlQ291bnQgPCB0aGlzLm51bVRvU2hvdyA/IHRoaXMucGFnZUNvdW50IDogdGhpcy5udW1Ub1Nob3c7XHJcblxyXG4gICAgLy8gVGhlIGN1cnJlbnQgcGFnZSBzaG91bGQgdHJ5IHRvIGFwcGVhciBpbiB0aGUgbWlkZGxlLCBzbyBnZXQgdGhlIG1lZGlhblxyXG4gICAgLy8gb2YgdGhlIG51bWJlciBvZiBwYWdlcyB0byBzaG93IGF0IG9uY2UgLSB0aGlzIHdpbGwgYmUgb3VyIGFkanVzdG1lbnQgZmFjdG9yXHJcbiAgICB2YXIgaW5kaWNhdG9yUG9zaXRpb24gPSBNYXRoLmNlaWwobnVtVG9SZW5kZXIgLyAyKTtcclxuXHJcbiAgICAvLyBTdWJ0cmFjdCB0aGUgcG9zIGZyb20gdGhlIGN1cnJlbnQgcGFnZSB0byBnZXQgdGhlIGZpcnN0IHBhZ2Ugbm9cclxuICAgIHZhciBmaXJzdFBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2UgLSBpbmRpY2F0b3JQb3NpdGlvbiArIDE7XHJcblxyXG4gICAgLy8gSWYgdGhlIGZpcnN0IHBhZ2UgaXMgbGVzcyB0aGFuIDEsIG1ha2UgaXQgMVxyXG4gICAgaWYgKGZpcnN0UGFnZU51bWJlciA8IDEpXHJcbiAgICAgIGZpcnN0UGFnZU51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyXHJcbiAgICAvLyByZW1lbWJlciB0byBzdWJ0cmFjdCAxIGFzIHRoaXMgcmVwcmVzZW50cyB0aGUgZmlyc3QgcGFnZSBudW1iZXJcclxuICAgIHZhciBsYXN0UGFnZU51bWJlciA9IGZpcnN0UGFnZU51bWJlciArIG51bVRvUmVuZGVyIC0gMTtcclxuXHJcbiAgICAvLyBJZiB0aGUgbGFzdCBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBjb3VudFxyXG4gICAgLy8gYWRkIHRoZSBkaWZmZXJlbmNlIHRvIHRoZSBmaXJzdC9sYXN0IHBhZ2VcclxuICAgIGlmIChsYXN0UGFnZU51bWJlciA+IHRoaXMucGFnZUNvdW50KSB7XHJcbiAgICAgIHZhciBkaWYgPSB0aGlzLnBhZ2VDb3VudCAtIGxhc3RQYWdlTnVtYmVyO1xyXG5cclxuICAgICAgZmlyc3RQYWdlTnVtYmVyICs9IGRpZjtcclxuICAgICAgbGFzdFBhZ2VOdW1iZXIgKz0gZGlmO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYWdlcyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSBmaXJzdFBhZ2VOdW1iZXI7IGkgPD0gbGFzdFBhZ2VOdW1iZXI7IGkrKykge1xyXG4gICAgICBwYWdlcy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgO1xyXG5cclxuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ1dHRvbnMoKSB7XHJcbiAgICB0aGlzLm5leHREaXNhYmxlZCA9IHRoaXMucGFnZSA9PT0gdGhpcy5wYWdlQ291bnQ7XHJcbiAgICB0aGlzLnByZXZEaXNhYmxlZCA9IHRoaXMucGFnZSA9PT0gMTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlICsgMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0SnVtcCgpIHtcclxuICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLnBhZ2UgKyB0aGlzLm51bVRvU2hvdyk7XHJcbiAgfVxyXG5cclxuICBwcmV2KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZSAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJldkp1bXAoKSB7XHJcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlIC0gdGhpcy5udW1Ub1Nob3cpO1xyXG4gIH1cclxuXHJcbiAgZmlyc3QoKSB7XHJcbiAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XHJcbiAgfVxyXG5cclxuICBsYXN0KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZUNvdW50KTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=