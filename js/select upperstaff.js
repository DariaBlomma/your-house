// Select upperstaff
	$('.upper_staff').each(function upperstaff(){
		// Variables
		let $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 500;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select_upperstaff"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap_upperstaff',
			text: 'Няня'
		}).insertAfter($this);
		
		let selectGap = $this.next('.select__gap_upperstaff'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list_upperstaff'
		}).insertAfter(selectGap);	
		
		let selectList = selectGap.next('.select__list_upperstaff');
		// Add li - option items
		for(let i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item_upperstaff',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		let selectItem = selectList.find('li');
		
		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					let chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});		

	});