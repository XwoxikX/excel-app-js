import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
	static className = 'excel__table'
	
	constructor($root) {
		super($root, {
			listners: ['click', 'mousedown']
		});
	}
	
	toHTML() {
		return createTable(25)
	}
	
	onClick() {
		console.log('click')
	}
	
	onMousedown() {
		console.log('mousedown')
	}
}
