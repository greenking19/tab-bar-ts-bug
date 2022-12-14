
Component({
	data: {
		value: 'index',
		list: [{
			icon: 'home',
			value: 'index',
			label: '้ฆ้กต',
		}, {
			icon: 'control-platform',
			value: 'logs',
			label: 'log',
		}, {
			icon: 'user',
			value: 'info',
			label: 'ๆ็'
		}]
	},
	lifetimes: {
		ready() {
			const pages = getCurrentPages();
			const curPage = pages[pages.length - 1];

			if (curPage) {
				const nameRe = /pages\/(\w+)/.exec(curPage.route);

				if (nameRe != null && nameRe[1] != null) {
					this.setData({
						value: nameRe[1]
					})
				}
			}
		}
	},
	methods: {
		handleChange(e: any) {
			const { value } = e.detail;

			// this.setData({ value });
			wx.switchTab({
				url: `/pages/${value}/${value}`,
			})
		}
	}
})
