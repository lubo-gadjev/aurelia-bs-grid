System.register([], function (_export) {
  'use strict';

  var GridColumn;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      GridColumn = (function () {
        function GridColumn(config, template, parent) {
          _classCallCheck(this, GridColumn);

          this.specialColumns = ['heading', 'nosort'];

          this.template = template;
          this.field = config.field;
          this.parent = parent;

          if (!this.field) throw new Error('field is required');

          this.heading = config.heading || config.field;
          this.nosort = config.nosort || false;
          this.sortDirection = undefined;

          this.filterValue = undefined;
          this.filterValueFrom = undefined;
          this.filterValueTo = undefined;
          this.showInputFilter = config['input-filter'] === 'true';
          this.showDateFilter = config['date-filter'] === 'true';
          this.showDateFromToFilter = config['date-filter-from-to'] === 'true';
          this.showBooleanFilter = config['boolean-filter'] === 'true';
          this.showSelect2Filter = config['select2-filter'] === 'true';
          this.select2Items = config['select2-items'];

          for (var prop in config) {
            if (config.hasOwnProperty(prop) && this.specialColumns.indexOf(prop) < 0) {
              this[prop] = config[prop];
            }
          }
        }

        _createClass(GridColumn, [{
          key: 'changeDirectionSort',
          value: function changeDirectionSort() {
            switch (this.sortDirection) {
              case 'asc':
                this.sortDirection = 'desc';
                break;
              case 'desc':
                this.sortDirection = undefined;
                break;
              default:
                this.sortDirection = 'asc';
                break;
            }

            this.parent.changeSort({
              name: this.field,
              value: this.sortDirection
            });
          }
        }, {
          key: 'updateFilters',
          value: function updateFilters() {
            this.parent.updateFilters();
          }
        }, {
          key: 'hasFilterValue',
          value: function hasFilterValue() {
            if (this.showDateFromToFilter === true) {
              return this.filterValueFrom !== undefined || this.filterValueTo !== undefined;
            } else {
              return this.filterValue !== undefined;
            }
          }
        }, {
          key: 'toggleBooleanFilter',
          value: function toggleBooleanFilter() {
            if (this.filterValue === undefined) {
              this.filterValue = true;
            } else {
              this.filterValue = !this.filterValue;
            }

            this.updateFilters();
          }
        }, {
          key: 'clearBooleanFilter',
          value: function clearBooleanFilter() {
            this.filterValue = undefined;
            this.updateFilters();
          }
        }, {
          key: 'getFilterValue',
          value: function getFilterValue() {
            if (this.showDateFromToFilter === true) {
              if (this.filterValueFrom && this.filterValueTo) {
                return [{
                  name: this.field + 'From',
                  value: this.filterValueFrom.unix() * 1000,
                  type: '>',
                  valueType: 'datetime'
                }, {
                  name: this.field + 'To',
                  value: this.filterValueTo.unix() * 1000,
                  type: '<',
                  valueType: 'datetime'
                }];
              } else if (this.filterValueFrom) {
                return [{
                  name: this.field + 'From',
                  value: this.filterValueFrom.unix() * 1000,
                  type: '>',
                  valueType: 'datetime'
                }];
              } else if (this.filterValueTo) {
                return [{
                  name: this.field + 'To',
                  value: this.filterValueTo.unix() * 1000,
                  type: '<',
                  valueType: 'datetime'
                }];
              }
            } else if (this.filterValue !== undefined) {
              var result = [{
                name: this.field,
                value: this.filterValue
              }];
              if (this.showBooleanFilter) {
                result[0].type = '=';
                result[0].valueType = 'boolean';
              } else if (this.showSelect2Filter) {
                result[0].type = '=';
                result[0].valueType = 'int';
              } else if (this.showInputFilter) {
                result[0].type = 'like';
                result[0].valueType = 'string';
              }

              return result;
            }

            return [];
          }
        }, {
          key: 'getQueryString',
          value: function getQueryString() {
            if (this.showDateFromToFilter === true) {
              if (this.filterValueFrom && this.filterValueTo) {
                return this.field + 'From=' + this.filterValueFrom.unix() * 1000 + '&' + this.field + 'To=' + this.filterValueTo.unix() * 1000;
              } else if (this.filterValueFrom) {
                return this.field + 'From=' + this.filterValueFrom.unix() * 1000;
              } else if (this.filterValueTo) {
                return this.field + 'To=' + this.filterValueTo.unix() * 1000;
              } else {
                return undefined;
              }
            } else if (this.filterValue) {
              return this.field + '=' + this.filterValue;
            } else {
              return undefined;
            }
          }
        }]);

        return GridColumn;
      })();

      _export('GridColumn', GridColumn);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFNLENBQUM7YUFDZjs7QUFFRCxtQkFBTyxFQUFFLENBQUM7V0FDWDs7O2lCQUVhLDBCQUFHO0FBQ2YsZ0JBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLElBQUksRUFBRTtBQUN0QyxrQkFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDOUMsdUJBQVUsSUFBSSxDQUFDLEtBQUssYUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksU0FBSSxJQUFJLENBQUMsS0FBSyxXQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFHO2VBQ2xILE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQy9CLHVCQUFVLElBQUksQ0FBQyxLQUFLLGFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUc7ZUFDaEUsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDN0IsdUJBQVUsSUFBSSxDQUFDLEtBQUssV0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBRztlQUM1RCxNQUFNO0FBQ0wsdUJBQU8sU0FBUyxDQUFDO2VBQ2xCO2FBQ0YsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUM7QUFDMUIscUJBQVUsSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsV0FBVyxDQUFHO2FBQzVDLE1BQU07QUFDTCxxQkFBTyxTQUFTLENBQUM7YUFDbEI7V0FDRjs7O2VBbkpVLFVBQVU7Ozs0QkFBVixVQUFVIiwiZmlsZSI6ImdyaWQvZ3JpZC1jb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3JpZENvbHVtbiB7XG5cbiAgc3BlY2lhbENvbHVtbnMgPSBbJ2hlYWRpbmcnLCAnbm9zb3J0J107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuZmllbGQgPSBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAoIXRoaXMuZmllbGQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpZWxkIGlzIHJlcXVpcmVkJyk7XG5cbiAgICB0aGlzLmhlYWRpbmcgPSBjb25maWcuaGVhZGluZyB8fCBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5ub3NvcnQgPSBjb25maWcubm9zb3J0IHx8IGZhbHNlO1xuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZUZyb20gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZVRvID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hvd0lucHV0RmlsdGVyID0gY29uZmlnWydpbnB1dC1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0RhdGVGaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID0gY29uZmlnWydkYXRlLWZpbHRlci1mcm9tLXRvJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dCb29sZWFuRmlsdGVyID0gY29uZmlnWydib29sZWFuLWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93U2VsZWN0MkZpbHRlciA9IGNvbmZpZ1snc2VsZWN0Mi1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2VsZWN0Mkl0ZW1zID0gY29uZmlnWydzZWxlY3QyLWl0ZW1zJ107XG5cbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIGZvciAodmFyIHByb3AgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3ApICYmIHRoaXMuc3BlY2lhbENvbHVtbnMuaW5kZXhPZihwcm9wKSA8IDApIHtcbiAgICAgICAgdGhpc1twcm9wXSA9IGNvbmZpZ1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb25Tb3J0KCkge1xuICAgIHN3aXRjaCAodGhpcy5zb3J0RGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdhc2MnOlxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnZGVzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzYyc6XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnYXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnQuY2hhbmdlU29ydCh7XG4gICAgICBuYW1lOiB0aGlzLmZpZWxkLFxuICAgICAgdmFsdWU6IHRoaXMuc29ydERpcmVjdGlvblxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVycygpIHtcbiAgICB0aGlzLnBhcmVudC51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBoYXNGaWx0ZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWVGcm9tICE9PSB1bmRlZmluZWQgfHwgdGhpcy5maWx0ZXJWYWx1ZVRvICE9PSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm9vbGVhbkZpbHRlcigpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICF0aGlzLmZpbHRlclZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgY2xlYXJCb29sZWFuRmlsdGVyKCkge1xuICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBnZXRGaWx0ZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVGcm9tICYmIHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfUZyb21gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlRnJvbS51bml4KCkgKiAxMDAwLFxuICAgICAgICAgIHR5cGU6ICc+JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRldGltZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9VG9gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpICogMTAwMCxcbiAgICAgICAgICB0eXBlOiAnPCcsXG4gICAgICAgICAgdmFsdWVUeXBlOiAnZGF0ZXRpbWUnXG4gICAgICAgIH1dO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfUZyb21gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlRnJvbS51bml4KCkgKiAxMDAwLFxuICAgICAgICAgIHR5cGU6ICc+JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRldGltZSdcbiAgICAgICAgfV07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfVRvYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVRvLnVuaXgoKSAqIDEwMDAsXG4gICAgICAgICAgdHlwZTogJzwnLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGV0aW1lJ1xuICAgICAgICB9XTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHJlc3VsdCA9IFt7XG4gICAgICAgIG5hbWU6IHRoaXMuZmllbGQsXG4gICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlXG4gICAgICB9XTtcbiAgICAgIGlmICh0aGlzLnNob3dCb29sZWFuRmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJz0nO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ2Jvb2xlYW4nO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dTZWxlY3QyRmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJz0nO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ2ludCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd0lucHV0RmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJ2xpa2UnO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ3N0cmluZyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0UXVlcnlTdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSAmJiB0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9RnJvbT0ke3RoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSoxMDAwfSYke3RoaXMuZmllbGR9VG89JHt0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpKjEwMDB9YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9RnJvbT0ke3RoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSoxMDAwfWA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWVsZH1Ubz0ke3RoaXMuZmlsdGVyVmFsdWVUby51bml4KCkqMTAwMH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWUpe1xuICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9PSR7dGhpcy5maWx0ZXJWYWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9