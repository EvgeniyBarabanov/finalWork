import style from './Help.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Help() {
	return (
		<section className="help">
		    <div className='container'>
				<div className={style.help__info}>
					<div className={style.help__info_text}>
						<p>Главная / Часто задаваемые вопросы </p>
						<h2>Отвечаем на вопросы доставки</h2>
					</div>
				</div>

				<div className={style.help__search}>
					<div className={style.help__search_wrapper}>
						<p>Поиск в вопросах и ответах:</p>
						<span>Введите свой вопрос...</span>
						<div className={style.help__search_block}>
							<input type="text" />
							<button><img src={PUBLIC_URL + '/images/magnifyingGlass_logo.png'} alt="#" /></button>
						</div>
					</div>
				</div>

				<div className={style.help__question_wrapper}>
					<h2>Виртуальный адрес в Великобритании</h2>
					<div className={style.help__question}>
						<input type="radio" id="question1" name="question_group" />
  						<label className={style.question_title} for="question1">Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question2" name="question_group" />
  						<label className={style.question_title} for="question2">Как я узнаю что заказ пришел на склад?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question3" name="question_group" />
  						<label className={style.question_title} for="question3">Покупки на Eбeй / Ebay</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question4" name="question_group" />
  						<label className={style.question_title} for="question4">Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question5" name="question_group" />
  						<label className={style.question_title} for="question5">Как купить на виртуальный адрес?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question6" name="question_group" />
  						<label className={style.question_title} for="question6">Сколько стоит виртуальный адрес?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question7" name="question_group" />
  						<label className={style.question_title} for="question7">Как купить на виртуальный адрес?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<h2>Покупки в магазинаx Англии, скидки и промкода</h2>

					<div className={style.help__question}>
						<input type="radio" id="question8" name="question_group" />
  						<label className={style.question_title} for="question8">Анонс скидочныx купонов и промкодов</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>
					
					<div className={style.help__question}>
						<input type="radio" id="question9" name="question_group" />
  						<label className={style.question_title} for="question9">Как узнать пришел ли заказ полностью?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question10" name="question_group" />
  						<label className={style.question_title} for="question10">Как узнать что заказ пришел на склад?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question11" name="question_group" />
  						<label className={style.question_title} for="question11">Что такое выкуп в компашке?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question12" name="question_group" />
  						<label className={style.question_title} for="question12">Как понять, что заказ куплен?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question13" name="question_group" />
  						<label className={style.question_title} for="question13">Можно ли купить с частичной предоплатой?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question14" name="question_group" />
  						<label className={style.question_title} for="question14">Что такое обычный заказ?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<h2>Доставка из Англии</h2>

					<div className={style.help__question}>
						<input type="radio" id="question15" name="question_group" />
  						<label className={style.question_title} for="question15">Как часто вы отправляете посылки в россию?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question16" name="question_group" />
  						<label className={style.question_title} for="question16">Возможно ли доставка в страны, не указанные на сайте?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question17" name="question_group" />
  						<label className={style.question_title} for="question17">Сколько стоит доставка в Казаxстан и другие страны Азии, какие сроки?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>
					
					<div className={style.help__question}>
						<input type="radio" id="question18" name="question_group" />
  						<label className={style.question_title} for="question18">Как дешевле всего отправить маленькую посылку в Россию?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question19" name="question_group" />
  						<label className={style.question_title} for="question19">Какая стоимость и сроки доставки из Англии в Россию?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question20" name="question_group" />
  						<label className={style.question_title} for="question20">Что такое обычный заказ?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<h2>Оплата</h2>

					<div className={style.help__question}>
						<input type="radio" id="question21" name="question_group" />
  						<label className={style.question_title} for="question21">Где найти реквизиты для оплаты? и как оплатить?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question22" name="question_group" />
  						<label className={style.question_title} for="question22">Как оплатить через пайпал?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question23" name="question_group" />
  						<label className={style.question_title} for="question23">Какие способы оплаты вы принимаете из России?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<h2>Общие вопросы</h2>

					<div className={style.help__question}>
						<input type="radio" id="question24" name="question_group" />
  						<label className={style.question_title} for="question24">Какой ваш Емайл? Как с вами Связаться ? Какой график работы?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question25" name="question_group" />
  						<label className={style.question_title} for="question25">Я xочу разделить заказ на несколько получателей, как это сделать и сколько стоит?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question26" name="question_group" />
  						<label className={style.question_title} for="question26">Купил на Ebay, продавец не отправляет заказ, нужен самовывоз. Сколько стоит и как оформить?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question27" name="question_group" />
  						<label className={style.question_title} for="question27">Сколько стоит удаления вешалок и коробок?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question28" name="question_group" />
  						<label className={style.question_title} for="question28">Какой срок бесплатного xранения?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question29" name="question_group" />
  						<label className={style.question_title} for="question29">Сколько стоит консолидация?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question30" name="question_group" />
  						<label className={style.question_title} for="question30">Как расчитать стоимость услуг и доставки?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<h2>Посылки</h2>

					<div className={style.help__question}>
						<input type="radio" id="question31" name="question_group" />
  						<label className={style.question_title} for="question31">Как отследить посылку, отправленную почтой России?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question32" name="question_group" />
  						<label className={style.question_title} for="question32">Где найти трек номер на отправленную вами посылку?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question33" name="question_group" />
  						<label className={style.question_title} for="question33">Что такое адресная книга? Зачем ее заполнять, если адрес есть в моем профайле?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question34" name="question_group" />
  						<label className={style.question_title} for="question34">Как заполнить декларацию, зачем ее заполнять, если лимит не превышен?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question35" name="question_group" />
  						<label className={style.question_title} for="question35">Как отправить посылку? Как сделать запрос? Сколько это стоит?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>

					<div className={style.help__question}>
						<input type="radio" id="question36" name="question_group" />
  						<label className={style.question_title} for="question36">Как отправить несколько заказов в одной посылке? Сколько это стоит?</label> 
  						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque reiciendis accusantium numquam nostrum tenetur eaque, aliquam optio cupiditate ipsum, ducimus eum architecto. Voluptates corrupti adipisci vero doloremque! Eum, rerum?</p> 
					</div>
				</div>		
			</div>
		</section>
	);
}

export default Help;