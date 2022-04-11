const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");

const FILE_PATH = "./data.json";

async function addCommit() {
	for (let i = 1; i < 180; i++) {
		const DATE = moment().subtract(i, "d").format();
		const data = {
			date: `${DATE + i} `,
		};
		for (let j = 0; j < Math.random() * 7; j++) {
			jsonfile.writeFile(FILE_PATH, data);
			await simpleGit()
				.add([FILE_PATH])
				.commit(`${DATE + i} `, { "--date": DATE });
		}
	}
}

addCommit();
// jsonfile.writeFile(FILE_PATH, data);

// simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();
